import React from 'react';
import { Button, Card, Heading } from '@radix-ui/themes';
import Breadcrumbs from '../../components/Breadcrumb';
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Comprehension() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Exercise 1: ', href: '/exercise-one' },
          { label: 'Comprehension' },
        ]}
        icon={IoHomeOutline}
      />
      <Heading as="h1" className="text-3xl font-bold mb-8">
        Comprehension Questions
      </Heading>

      <Card className="p-6 mb-8">
        <form id="test_form" style={{ display: 'block' }}>
          1. <div id="question_1">When the Moon is away from the Sun, it looks
          </div>
          &nbsp;&nbsp;&nbsp;<label><input type="radio" id="1.a" name="q1" value="one" />&nbsp;<span id="choice_1a_letter">A. </span><div id="choice_1a">light.
          </div></label>
          &nbsp;&nbsp;&nbsp;<label><input type="radio" id="1.b" name="q1" value="two" />&nbsp;<span id="choice_1b_letter">B. </span><div id="choice_1b">dark.
          </div></label>
          &nbsp;&nbsp;&nbsp;<label><input type="radio" id="1.c" name="q1" value="three" />&nbsp;<span id="choice_1c_letter">C. </span><div id="choice_1c">crescent-shaped.
          </div></label>
          <span id="newline"><br /></span>
          {/* Add other questions similarly */}
        </form>
      </Card>

      {/* Next button */}
      <Link to="/result">
        <Button className="mr-2">
          Next <IoHomeOutline />
        </Button>
      </Link>
    </div>
  );
}

export default Comprehension;
