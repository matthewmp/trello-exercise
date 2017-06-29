'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import chai from 'chai';
const should = chai.should();

import List from '../js/components/list';

describe('List component', function(){
	it('Should render a list component', function(){
		let cards = ['Card 1', 'Card 2', 'Card 3'];

		const renderer = TestUtils.createRenderer();
		renderer.render(<List cards={cards} />)
		const result = renderer.getRenderOutput();

		result.props.className.should.equal('list');
		result.props.children[0].should.be.a('array');
		result.props.children[0].should.have.length(3);
		result.props.children[0][0].props.text.should.be.equal('Card 1');
		result.props.children[1].type.should.equal('form');
		result.props.children[1].props.children[0].type.should.equal('input');
		result.props.children[1].props.children[1].type.should.equal('button');
	});
});
