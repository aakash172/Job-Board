import { IconBrandItch } from '@tabler/icons-react';
import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from '@tabler/icons-react';
import { footerLinks } from '../Data/Data';
const Footer = () => {
    return (
        <div className="pt-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-['poppins']">
            <div className='w-1/4 flex flex-col gap-4'>
                <div className='flex gap-1 item-center text-bright-sun-400'>
                    <IconBrandItch className='h-8 w-7' stroke={2.5} />
                    <div className='text-xl font-semibold'>CareerHub</div>
                </div>
                <div className='text-sm text-mine-shaft-300'>Job portal with user profiles, skill updates,certifications ,work experience and admin job posting</div>
                <div className='flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer [&>div]:hover:bg-mine-shaft-700'>
                    <div><IconBrandFacebook /></div>
                    <div><IconBrandInstagram /></div>
                    <div><IconBrandX /></div>
                </div>
            </div>

            {
                footerLinks.map((item, index) =>
                    <div key={index + item.title} className='w-1/4'>
                        <div className='text-lg font-semibold mb-4 text-bright-sun-400'>{item.title}</div>
                        {
                            item.links.map((link, index) =>
                                <div key={index + link} className='text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-500 ease-in-out'>{link}</div>
                            )
                        }

                    </div>
                )
            }
        </div>
    )
}
export default Footer;