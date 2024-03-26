import React from 'react'
import { SegmentedControl } from '@radix-ui/themes';

function Tab() {
  return (
    <div>
      <SegmentedControl.Root defaultValue="inbox">
  <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
  <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
  <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
</SegmentedControl.Root>
    </div>
  )
}

export default Tab
