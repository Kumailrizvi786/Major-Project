import React from 'react'
import  {Container, Flex, Text, Skeleton} from '@radix-ui/themes';
function Skeletons() {
  return (
    <div>
      <Container size="1">
  <Flex direction="column" gap="2">
    <Text>
      <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
    </Text>

    <Skeleton>
      <Text>Lorem ipsum dolor sit amet</Text>
    </Skeleton>
  </Flex>
</Container>
    </div>
  )
}

export default Skeletons
