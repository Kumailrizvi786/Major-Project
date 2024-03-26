import React from 'react'
import  {TextField, Box, IconButton, Kbd} from '@radix-ui/themes';
import {DotsHorizontalIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons';
function Search({text}) {
  return (
    <div>
       <Box maxWidth="250px">
    <TextField.Root placeholder={text} size="2">
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      <TextField.Slot>
        {/* <IconButton size="1" variant="ghost">
          <DotsHorizontalIcon height="14" width="14" />
       
        </IconButton> */}
        <Kbd shortcut="⌘ S">⌘ S</Kbd>
      </TextField.Slot>
    </TextField.Root>
  </Box>
    </div>
  )
}

export default Search
