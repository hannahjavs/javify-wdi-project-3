import React from 'react';
import BackButton from '../utility/BackButton';
import GoogleMap from '../google/GoogleMap';

function PlansForm({ handleSubmit, handleChange, plan, playlists, getPlaylist, errors, history, updateRoute }) {
  return (
    // <div className="row">
    //   <div className="page-banner col-md-12">

    <div className="container">
      <div className="row">
        <div className="col-4 leftColShow">

          <BackButton history={history} />
        </div>
        <form onSubmit={handleSubmit} className="col-md-6">

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
          <div className={errors.date ? 'form-group has-error' :
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
          </div>


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
            <label htmlFor="difficulty">Difficulty</label>
            <select
              className="form-control"
              id="difficulty"
              name="difficulty"
              value={plan.difficulty}
              onChange={handleChange}
            >
              <option value="" disabled>Please Select</option>
              <option>EASY</option>
              <option>MEDIUM</option>
              <option>HARD</option>
            </select>
            {errors.difficulty && <small className="has-error">{errors.difficulty}</small>}
          </div>

          {/* SELECT A PLAYLIST FROM SPOTIFY */}
          {/* <div className={errors.playlist ? 'form-group has-error' :
            'form-group'}> */}
          <label htmlFor="playlist">Playlist</label>
          {playlists && playlists.map(playlist => (
            <div className="radio" key={playlist.id}>
              <label>
                <input type="radio"
                  className="form-control"
                  id="playlist"
                  name="playlist"
                  value={playlist.id}
                  checked={playlist.id === plan.playlist}
                  onChange={handleChange} />
                {/* {errors.playlist && <small className="has-error">{errors.playlist}</small>} */}

                {playlist.name}
              </label>
              {!playlist.tracks.items && <button type="button" onClick={() => getPlaylist(playlist.id)}>Preview Tracks</button>}
              {playlist.tracks.items && playlist.tracks.items.length}
              {playlist.tracks.items && playlist.tracks.items.map(item => <audio controls key={item.track.id} src={item.track.preview_url}></audio>)}
            </div>
          ))}

          {/* SAVE PLAN */}
          <div>
            <button className="save-button">Save</button>
          </div>

          <GoogleMap updateRoute={updateRoute} center={{ lat: 51.5074, lng: -0.1278 }} />

        </form>
      </div>
    </div>
  );
}

export default PlansForm;
