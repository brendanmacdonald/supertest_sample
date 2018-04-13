require('./common.js');

const customer = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber()
};

const customerPost = {
    first_name: customer.firstName,
    last_name: customer.lastName,
    phone: customer.phoneNumber
}

describe('GET /customers', function () {
    it('returns a list of customers', function (done) {
        supertest(baseURL)
            .get('/customers/1')
            .end(function (err, res) {
                expect(res.body).to.have.property('id').and.be.a('number').and.equal(1);
                expect(res.body).to.have.property('first_name').and.be.a('string').and.equal('John');
                expect(res.body).to.have.property('last_name').and.be.a('string').and.equal('Smith');
                expect(res.body).to.have.property('phone').and.be.a('string').and.equal('219-839-2819');
                done();
            })
    });
});

describe('POST to /customers', function () {
    it.only('returns a list of customers', function (done) {
        supertest(baseURL)
            .post('/customers')
            .set('Content-Type', 'application/json')
            .send(customerPost)
            .expect(201, done)
    });
});