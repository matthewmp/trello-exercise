import React from 'react';
import TestUtils from 'react-addons-test-utils';

import chai from 'chai';
const should = chai.should();

import {ListContainer} from '../js/components/listContainer';

describe('ListContainer component', function(){
	it('Should render a List Container', function(){
		const renderer = TestUtils.createRenderer();
		renderer.render(<ListContainer />);
		const result = renderer.getRenderOutput();		

		result.props.cards.should.be.a('array');
	});
});