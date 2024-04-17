import React from 'react';
import { RiHome2Line } from 'react-icons/ri';
import { Dialog, Badge, Button, Callout, DataList, Flex, Grid, Heading, Inset, Link, Popover, Switch, TextField, Text, Avatar, Card } from '@radix-ui/themes';
import { InfoCircledIcon, Link1Icon, Share2Icon } from '@radix-ui/react-icons';
import { FiEdit } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa6';
import Breadcrumbs from '../../components/Breadcrumbs';
import getUser from '../../utils/helper';

const Profile = () => {
    const userData= getUser();
    const breadcrumbsItems = [
        { text: 'Home', link: '/', icon: <RiHome2Line /> },
        { text: 'Profile' },
    ];

    return (
        <div className='flex flex-col pt-16 p-4'>
            <Breadcrumbs items={breadcrumbsItems} />
            <Card className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 py-4">
                {/* Left side */}
                <div>
                    {/* Including profile pic */}
                    <Flex justify="center">
                        <Avatar alt="Profile picture" radius='full' fallback={userData.name[0]} size="8" />
                    </Flex>
                    {/* Edit profile button */}
                    <Flex justify="center" className="mt-4">
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button size="2" color="indigo" variant="soft" className='cursor-pointer'>
                                    <FiEdit />
                                    Edit profile
                                </Button>
                            </Dialog.Trigger>
                            <Dialog.Content maxWidth="450px">
                                <Dialog.Title>Edit profile</Dialog.Title>
                                <Dialog.Description size="2" mb="4">
                                    Make changes to your profile.
                                </Dialog.Description>

                                <Flex direction="column" gap="3">
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Name
                                        </Text>
                                        <TextField.Root
                                            defaultValue={userData.name}
                                            placeholder="Enter your full name"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Email
                                        </Text>
                                        <TextField.Root
                                            defaultValue={userData.email}
                                            placeholder="Enter your email"
                                            disabled
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Age
                                        </Text>
                                        <TextField.Root
                                            defaultValue="22"
                                            placeholder="Enter your age"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Location
                                        </Text>
                                        <TextField.Root
                                            defaultValue="Lucknow, India"
                                            placeholder="Enter your location"
                                        />
                                    </label>

                                </Flex>

                                <Flex gap="3" mt="4" justify="end">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray" className='cursor-pointer'>
                                            Cancel
                                        </Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button variant='outline' className='cursor-pointer'>Save</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                    </Flex>
                   
                </div>

                {/* Right side show all details like email, age, gender, city */}
                <div>
                    <DataList.Root>
                        <DataList.Item align="center">
                            <DataList.Label minWidth="88px">Account type</DataList.Label>
                            <DataList.Value>
                                <Flex align="center" gap="2">
                                    <Badge color="plum" variant="soft" radius="full">
                                        Admin
                                    </Badge>
                                    {/* verify now */}
                                    {/* Add verification logic here */}
                                </Flex>
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">Name</DataList.Label>
                            <DataList.Value>
                                <Flex align="center" gap="2">
                                    {userData.name}
                                </Flex>
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">Email</DataList.Label>
                            <DataList.Value>
                                <Flex align="center" gap="2">
                                    <Link href={`mailto:${userData.email}`}>
                                        {userData.email}
                                    </Link>
                                </Flex>
                            </DataList.Value>
                        </DataList.Item>
                      
                        <DataList.Item>
                            <DataList.Label minWidth="88px">Age</DataList.Label>
                            <DataList.Value>
                                <Flex align="center" gap="2">
                                    22, Male
                                </Flex>
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">Location</DataList.Label>
                            <DataList.Value>
                                <Flex align="center" gap="2">
                                    Lucknow, India
                                </Flex>
                            </DataList.Value>
                        </DataList.Item>
                    </DataList.Root>
                </div>
            </Card>
        </div>
    );
}

export default Profile;
