// links
import Link from "next/link";

// icons
import {
  RiGithubLine,
  RiInstagramFill,
  RiLinkedinLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
    return (
        <div className="flex items-center gap-x-5 text-lg">
            <Link href={'https://github.com/MirkaJuliet34'} className='hover:text-accent transition-all duration-300'>
                <RiGithubLine />
            </Link>
            <Link href={'https://www.instagram.com/mirka.juliet/'} className='hover:text-accent transition-all duration-300'>
                <RiInstagramFill />
            </Link>
            <Link href={'https://www.linkedin.com/in/mirka-juliet-9bb590148/'} className='hover:text-accent transition-all duration-300'>
                <RiLinkedinLine />
            </Link>
            <Link href={''} className='hover:text-accent transition-all duration-300'>
                <RiDribbbleLine />
            </Link>
            <Link href={''} className='hover:text-accent transition-all duration-300'>
                <RiBehanceLine />
            </Link>
            <Link href={''} className='hover:text-accent transition-all duration-300'>
                <RiPinterestLine />
            </Link>
        </div>
    );
};

export default Socials;