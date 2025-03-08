import { IconSettings, IconBell, IconBrandItch } from '@tabler/icons-react';
import { Avatar, Indicator } from '@mantine/core';
import NavLinks from './NavLinks';
const Header = () => {
    return (
        <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center">
            <div className='flex gap-1 item-center text-bright-sun-400'>
                <IconBrandItch className='h-8 w-8' stroke={2.5} />
                <div className='text-2xl font-semibold'>CareerHub</div>

            </div>
            <NavLinks />
            <div className='flex gap-3 items-center'>
                <div className='flex items-center gap-2'>
                    <Avatar src="avatar9.png" alt="it's me" />
                    <div>Akash</div>
                </div>
                <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                    <IconSettings stroke={1.5} />
                </div>
                <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                    <Indicator color="brightSun.4" size={8} offset={5} processing>
                        <IconBell stroke={1.5} />
                    </Indicator>
                </div>

            </div>

        </div>
    )
}
export default Header;