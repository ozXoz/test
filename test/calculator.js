


const calculator= require('../calculator');
const expect =require('chai').expect;

it('Should return the sum of two numbers', () => {
    expect(calculator.add(5, 2)).toEqual(7);
    });

	

it('Should return the sum of two numbers', () => {
	expect(calculator.add(5, 2)).equal(7);
	});
	
	it('Should return the incorrect sum of two numbers', () => {
	expect(calculator.add(5, 2)).not.equal(8);
	});
	
	//subtract test cases
	it('Should return the difference of two numbers', () => {
	expect(calculator.sub(5, 2)).equal(3);
	});
	
	it('Should return the incorrect difference of two numbers', () => {
	expect(calculator.sub(5, 2)).not.equal(5);
	});


	it('Should return the product of two numbers', () => {
		expect(calculator.mul(5, 2)).equal(10);
		});
		
		it('Should return the incorrect product of two numbers', () => {
		expect(calculator.mul(5, 2)).not.equal(12);
		});
		
		//divide test cases
		it('Should return the quotient of two numbers', () => {
		expect(calculator.div(10, 2)).equal(5);
		});
		
		it('Should return the incorrect quotient of two numbers', () => {
		expect(calculator.div(10, 2)).not.equal(2);
		});


describe('Calculator test', () => {
	it('Should return the sum of two numbers', () => {
	expect(calculator.add(5, 2)).to.equal(7);
	});
	
	it('Should return the incorrect sum of two numbers', () => {
	expect(calculator.add(5, 2)).to.not.equal(8);
	});
	
	it('Should return the difference of two numbers', () => {
	expect(calculator.sub(5, 2)).to.equal(3);
	});
	
	it('Should return the incorrect difference of two numbers', () => {
	expect(calculator.sub(5, 2)).to.not.equal(5);
	});
	
	it('Should return the product of two numbers', () => {
	expect(calculator.mul(5, 2)).to.equal(10);
	});
	
	it('Should return the incorrect product of two numbers', () => {
	expect(calculator.mul(5, 2)).to.not.equal(12);
	});
	
	it('Should return the quotient of two numbers', () => {
	expect(calculator.div(10, 2)).to.equal(5);
	});
	
	it('Should return the incorrect quotient of two numbers', () => {
	expect(calculator.div(10, 2)).to.not.equal(2);
	});
	});


	it('Should throw an error when called with a string', () => {
		expect(() => calculator.add('5', 2)).to.throw();
	});


	it('Should throw an error when called with a string', () => {
		expect(() => calculator.add('5', 2)).to.throw();
	});
	it('Should throw an error when called with a object', () => {
		expect(() => calculator.add({}, 2)).to.throw();
	});

	
	it('Should throw an error when called with a string', () => {
		expect(() => calculator.sub('5', 2)).to.throw();
	});
	it('Should throw an error when called with a object', () => {
		expect(() => calculator.sub({}, 2)).to.throw();
	});
	

	it('Should throw an error when called with a string', () => {
		expect(() => calculator.div('5', 2)).to.throw();
	});
	it('Should throw an error when called with a object', () => {
		expect(() => calculator.div({}, 2)).to.throw();
	});
	it('Should throw an error when called with a 0 as denominator', () => {
		expect(() => calculator.div(5, 0)).to.throw();
	});
	