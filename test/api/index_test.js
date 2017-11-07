/* global api, describe, it, expect, beforeEach, afterEach */

require('../helper'); // require the helper to make everything in the helper.js file available to us

const Plan = require('../../../models/plan');

const planData = [{
  title: 'Columbia Road',
  location: 'Shoreditch',
  playlist: 'Autmn 2017',
  difficulty: 'EASY',
  image: 'url',
  createdBy: 'hannahjavs',
  route: [],
  markers: {}
}];


describe('GET /api/plans', () => {

  beforeEach(done => {
    Plan.create(planData, done);
  });

  afterEach(done => {
    Plan.collection.remove();
    done();
  });

  it('should return a 200 response', done => {
    api
      .get('/api/plans')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should return an array', done => {
    api
      .get('/api/plans')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return correct data', done => {
    api
      .get('/api/plans')
      .set('Accept', 'application/json')
      .end((err, res) => {
        const planItem = res.body[0];
        expect(planItem.id).to.be.a('string');
        expect(planItem.title).to.equal(planData[0].title);
        expect(planItem.image).to.equal(planData[0].image);
        expect(planItem.category).to.equal(planData[0].category);
        done();
      });
  });

// closing test tage
});


// TESTING:

// DESCRIBE

// IT - It followed by the word should. e.g "it should display..plan"

// ASSERTIONS
