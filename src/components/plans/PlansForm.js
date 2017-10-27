import React from 'react';
// import BackButton from '../utility/BackButton';

function PlansForm({ handleSubmit, handleChange, plan, playlists, getPlaylist }) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
        {/* <BackButton history={history} /> */}
      </div>

      <form onSubmit={handleSubmit} className="col-md-6">

        {/* <div className={errors.title ? 'form-group has-error' :
        'form-group'}> */}

        {/* PLAN TITLE */}
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={plan.title}
          onChange={handleChange}
        />
        {/* {errors.title && <small className="has-error">{errors.title}</small>} */}
        {/* </div> */}


        {/* LOCATION - USE GOOGLE AUTO COMPLETE */}
        <label htmlFor="location">Location</label>
        <input
          type="text"
          className="form-control"
          id="location"
          name="location"
          value={plan.location}
          onChange={handleChange}
        />


        {/* LOCATION - USE GOOGLE AUTO COMPLETE */}
        <label htmlFor="location">Start of route</label>
        <input
          type="number"
          className="form-control"
          id="start"
          name="start"
          value={plan.start}
          onChange={handleChange}
        />
        <label htmlFor="location">End of route</label>
        <input
          type="number"
          className="form-control"
          id="end"
          name="end"
          value={plan.end}
          onChange={handleChange}
        />

        {/* <div className={errors.image ? 'form-group has-error' : 'form-group'}> */}

        {/* DATE OF PLAN POSTED */}
        <label htmlFor="title">Date</label>
        <input
          type="text"
          className="form-control"
          id="date"
          name="date"
          value={plan.date}
          onChange={handleChange}
        />



        {/* PLAN IMAGE */}
        <label htmlFor="image">Image</label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          value={plan.image}
          onChange={handleChange}
        />
        {/* {errors.image && <small className="has-error">{errors.image}</small>} */}
        {/* </div> */}

        {/* <div className={errors.category ? 'form-group has-error' : 'form-group'}> */}



        {/* PLAN DIFFICULTY */}
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

        <label htmlFor="playlist">Playlist</label>
        {playlists && playlists.map(playlist => (
          <div className="radio" key={playlist.id}>
            <label>
              <input type="radio"
                className="form-control"
                id="playlist"
                name="playlist"
                value={playlist.id}
                onChange={handleChange} />
              {playlist.name}
            </label>
            {!playlist.tracks.items && <button type="button" onClick={() => getPlaylist(playlist.id)}>Preview Tracks</button>}
            {playlist.tracks.items && playlist.tracks.items.length}
            {playlist.tracks.items && playlist.tracks.items.map(item => <audio controls key={item.track.id} src={item.track.preview_url}></audio>)}
          </div>
        ))}

        {/* {errors.category && <small className="has-error">{errors.category}</small>} */}
        {/* </div> */}


        {/* SAVE PLAN */}
        <div>
          <button className="save-button">Save</button>
        </div>

        {/* <BackButton history={this.props.history} /> */}

      </form>
    </div>
  );
}

export default PlansForm;
