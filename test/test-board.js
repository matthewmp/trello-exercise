import React from 'react';
import TestUtils from 'react-addons-test-utils';

import chai from 'chai';
const should = chai.should();

import Board from '../js/components/board';

describe('Board Component', function(){
	it('Should render a Board component', function(){
		const renderer = TestUtils.createRenderer();
		renderer.render(<Board title="Test Title"/>);
		const result = renderer.getRenderOutput();
		console.log(result.props);
	})
})