import { Card, Flex, Text} from '@radix-ui/themes'
import React from 'react'

function AllCard() {
  return (
    <div>
      <Flex direction="column" gap="3" maxWidth="350px">
  <Card variant="surface">
    <Text as="div" size="2" weight="bold">
      Quick start
    </Text>
    <Text as="div" color="gray" size="2">
      Start building your next project in minutes
    </Text>
  </Card>

  <Card variant="classic">
    <Text as="div" size="2" weight="bold">
      Quick start
    </Text>
    <Text as="div" color="gray" size="2">
      Start building your next project in minutes
    </Text>
  </Card>
</Flex>
    </div>
  )
}

export default AllCard
