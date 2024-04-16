import { Card, Flex, Text} from '@radix-ui/themes'
import React from 'react'

function AllCard() {
  return (
    <div className='mt-4'>
      <Flex direction="row" gap="3" maxWidth="1000px">
  <Card size="4" variant="surface">
    <Text as="div" size="2" weight="bold">
      Total Exercises
    </Text>
    <Text as="div" color="gray" size="2">
      Total Things show here haha
    </Text>
  </Card>

  <Card size="3" variant="classic">
    <Text as="div" size="2" weight="bold">
      Total Users
    </Text>
    <Text as="div" color="gray" size="2">
      Total Things show here haha
    </Text>
    
  </Card>
  <Card size="4" variant="classic">
    <Text as="div" size="2" weight="bold">
      Total Categories
    </Text>
    <Text as="div" color="gray" size="2">
      Total Things show here haha
    </Text>
  </Card>
  <Card size="4" variant="classic">
    <Text as="div" size="2" weight="bold">
      Total Subcategories
    </Text>
    <Text as="div" color="gray" size="2">
      Total Things show here haha
    </Text>
  </Card>
</Flex>
    </div>
  )
}

export default AllCard
