import { IconBriefcase2, IconSettings, IconBell } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';
const Header = () => {
    return (
        <div className="w-full bg-black px-6 text-white h-28 flex justify-between items-center">
            <div className='flex gap-3 item-center'>
                <IconBriefcase2 className='h-10 w-10' stroke={1.25} />
                <div className='text-2xl font-semibold'>CareerHub</div>

            </div>
            <div className='flex gap-3'>
                <a href=''>Find Jobs</a>
                <a href=''>Find Talent</a>
                <a href=''>Upload Job</a>
                <a href=''>About Us</a>
            </div>
            <div className='flex gap-5 items-center'>
                <IconBell />
                <div className='flex items-center gap-2'>
                    <div>Akash</div>
                    <Avatar src="avatar.png" alt="it's me" />
                </div>
                <IconSettings stroke={2} />
            </div>

        </div>
    )
}
export default Header;