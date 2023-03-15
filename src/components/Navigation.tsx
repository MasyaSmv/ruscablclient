import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <>
            <nav className={'w-full h-[50px] flex justify-between px-5 bg-blue-500 items-center text-white'}>
                <div className={'flex'}>
                    <div className={'bg-white rounded-full p-2 h-fit mr-2'}>
                        <Link to={'https://vk.com'}><img className='vk-logo w-5 '
                                                         src={require('../assets/image/vk-logo.svg').default}
                                                         alt='vk-logo'/></Link>
                    </div>
                    <div className={'bg-white rounded-full p-2 h-fit mr-2'}>
                        <Link to={'https://www.youtube.com'}><img className='youtube-logo w-5 '
                                                                  src={require('../assets/image/youtube-logo.svg').default}
                                                                  alt='youtube-logo'/></Link>
                    </div>
                    <div className={'bg-white rounded-full p-1 h-fit mr-2'}>
                        <Link to={'https://web.telegram.org/z/'}><img className='telegram-logo w-7 '
                                                                      src={require('../assets/image/telegram-logo.svg').default}
                                                                      alt='telegram-logo'/></Link>
                    </div>
                    <div className={'bg-white rounded-full p-1 h-fit mr-2'}>
                        <Link to={'https://web.whatsapp.com'}><img className='whatsapp-logo w-7'
                                                                   src={require('../assets/image/whatsapp-logo.svg').default}
                                                                   alt='whatsapp-logo'/></Link>
                    </div>
                </div>

            </nav>

            <div className={'flex flex-col w-fit h-fit bg-blue-500'}>
                <Link className={'mr-2'} to={'/'}>Products</Link>
                <Link className={'mr-2'} to={'/about'}>About</Link>
                <Link className={'mr-2'} to={'/no_match'}>NoMatch</Link>
            </div>
        </>
    )
}