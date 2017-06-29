'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function(){
	it('Should return a card component', function(){
		const text = 'Some Text Here';

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card text={text} />);
		const result = renderer.getRenderOutput();

		result.props.className.should.equal('card');
		const p = result.props.children		
		p.type.should.equal('p');
		p.props.children.should.equal('Some Text Here');
		
	});
});

