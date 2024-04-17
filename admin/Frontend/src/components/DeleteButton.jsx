import React from 'react'

function DeleteButton() {
  return (
    <div>
      <AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red">Revoke access</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content maxWidth="450px">
    <AlertDialog.Title>Revoke access</AlertDialog.Title>
    <AlertDialog.Description size="2">
      Are you sure? This application will no longer be accessible and any
      existing sessions will be expired.
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="solid" color="red">
          Revoke access
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
    </div>
  )
}

export default DeleteButton
