import React from 'react';
import BackButton from '../utility/BackButton';

import GoogleMap from '../google/GoogleMap';

function PlansForm({ edit, handleSubmit, handleChange, plan, playlists, getPlaylist, errors, history, updateRoute, updateMarkers }) {
  return (
    <div className="row">
      <div className="col-lg-6 leftColShow">
        {/* <BackButton history={history} /> */}

        <form onSubmit={handleSubmit}>

          {/* PLAN TITLE */}
          <div className={errors.title ? 'form-group has-error' :
            'form-group'}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={plan.title}
              onChange={handleChange}
            />
            {errors.title && <small className="has-error">{errors.title}</small>}
          </div>

          {/* LOCATION - USE GOOGLE AUTO COMPLETE */}
          <div className={errors.location ? 'form-group has-error' :
            'form-group'}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={plan.location}
              onChange={handleChange}
            />
            {errors.location && <small className="has-error">{errors.location}</small>}
          </div>

          {/* DATE OF PLAN POSTED */}
          {/* <div className={errors.date ? 'form-group has-error' :
            'form-group'}>
            <label htmlFor="date">Date</label>
            <input
              type="text"
              className="form-control"
              id="date"
              name="date"
              value={plan.date}
              onChange={handleChange}
            />
            {errors.date && <small className="has-error">{errors.date}</small>}
          </div> */}


          {/* PLAN IMAGE */}
          <div className={errors.image ? 'form-group has-error' : 'form-group'}>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={plan.image}
              onChange={handleChange}
            />
            {errors.image && <small className="has-error">{errors.image}</small>}
          </div>


          {/* PLAN DIFFICULTY */}
          <div className={errors.difficulty ? 'form-group has-error' : 'form-group'}>
            <label htmlFor="difficulty">Categorise</label>
            <select
              className="form-control"
              id="difficulty"
              name="difficulty"
              value={plan.difficulty}
              onChange={handleChange}
            >
              <option value="" disabled>How difficult is the route?</option>
              <option>EASY</option>
              <option>MEDIUM</option>
              <option>HARD</option>
            </select>
            {errors.difficulty && <small className="has-error">{errors.difficulty}</small>}
          </div>



          {/* SELECT A PLAYLIST FROM SPOTIFY */}
          {/* NOTE: ADD SOME ERROR MESSAGES IF USED DOES NOT SELECT PLAYLIST */}
          <label htmlFor="playlist">Select the playlist you usually listen to on this route:</label>

          {/* MAPPING OVER PLAYLISTS FROM SPOTIFY */}
          {playlists && playlists.map(playlist => (
            <div className="" key={playlist.id}>
              <div className="radio">
                {/* <label> */}
                <input type="radio"
                  className="radio-button plan-form-item"
                  id="playlist"
                  name="playlist"
                  value={playlist.id}
                  checked={playlist.id === plan.playlist}
                  onChange={handleChange} />

                {/* PLAYLIST NAME */}
                <p className="playlist-name pFormItem">{playlist.name}</p>
                {/* </label> */}

                {!playlist.tracks.items && <button className="preview-tracks-button pFormItem" type="button" onClick={() => getPlaylist(playlist.id)}>Preview Tracks</button>}
                {playlist.tracks.items && playlist.tracks.items.length}
                {playlist.tracks.items && playlist.tracks.items.map(item => <audio controls key={item.track.id} src={item.track.preview_url}></audio>)}
              </div>
            </div>
          ))}



          <button className="save-button">Save</button>
          <BackButton history={history} />
        </form>
      </div>

      {/* Use geolocation to center the map where the user is so they can plot a route that they have recently done to where they are */}
      <div className="col-lg-6 leftColShow">
        {
          edit && plan.route.routes ?
            <GoogleMap updateRoute={updateRoute} updateMarkers={updateMarkers} route={plan.route} markers={plan.markers} />
            :
            <div>
              <GoogleMap updateRoute={updateRoute} updateMarkers={updateMarkers} geolocate={true} />
            </div>
        }
      </div>
    </div>
  );
}

export default PlansForm;
