import React from 'react'
import  {Container, Box,Inset,Text, Strong,Card,IconButton,Tooltip, Heading,Button} from '@radix-ui/themes';
import {SunIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons';
function Test() {
  return (
    <div>
       <Box maxWidth="240px">
      <Card size="2">
        <div className="flex">
          {/* Image */}
          <div className="flex-shrink-0">
            <Inset clip="border-box" side="left" px="0" py="0">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Inset>
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center px-4 py-2">
            <Text as="p" size="3">
              <Strong>Test</Strong> Description
            </Text>
          </div>
        </div>
      </Card>
    </Box>
    </div>
  )
}

export default Test
