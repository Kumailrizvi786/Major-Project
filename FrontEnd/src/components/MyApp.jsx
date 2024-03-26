import { Flex,Badge,Box,Card,Avatar, DropdownMenu,Section, Text, Button } from '@radix-ui/themes';

export default function MyApp() {
  return (
    <>
    <Flex gap="2">
  <Badge color="orange">In progress</Badge>
  <Badge color="blue">In review</Badge>
  <Badge color="green">Complete</Badge>
  <Badge variant="soft" color="indigo">
    New
  </Badge>
  <Badge variant="surface" color="indigo">
    New
  </Badge>
</Flex>

<Box maxWidth="240px">
  <Card>
    <Flex gap="3" align="center">
      <Avatar
        size="3"
        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        radius="full"
        fallback="T"
      />
      <Box>
        <Text as="div" size="2" weight="bold">
          Teodros Girmay
        </Text>
        <Text as="div" size="2" color="gray">
          Engineering
        </Text>
      </Box>
    </Flex>
  </Card>
</Box>
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button variant="soft">
      Options
      <DropdownMenu.TriggerIcon />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
    <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
        <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

        <DropdownMenu.Separator />
        <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>

    <DropdownMenu.Separator />
    <DropdownMenu.Item>Share</DropdownMenu.Item>
    <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
      Delete
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>

    </>

    
  );
}