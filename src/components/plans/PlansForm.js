import React from 'react';
// import BackButton from '../utility/BackButton';

function PiesForm({ handleSubmit, handleChange, plan }) {
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

export default PiesForm;
