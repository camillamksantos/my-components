import { useState, Fragment } from 'react'
import { NavLink } from 'react-router'
import { Popover, Transition } from '@headlessui/react'
import { MdExpandMore, MdMenu } from 'react-icons/md'
import { Ca, Us, Jp } from "react-flag-icons"; // bandeiras

import '../index.css'
import '../App.css'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav aria-label='Menu Principal' className='bg-back text-primary-500 fixed w-full top-0 z-50'>
        <div className='mx-auto max-w-7x1 grid grid-cols-3 items-center p-6 lg:p-8'>
            <div className='col-start-1 col-end-2 flex'>
                <NavLink to='/'>
                    <span className='font-bold text-primary-500'>ProjetoIntegrador</span>
                </NavLink>
            </div>
            
            {/* Menu Desktop */}
            <div className='col-start-2 col-end-3 hidden lg:flex justify-center space-x-6'>
                <NavLink to='/' className='hover:bg-primary-100 px-4 py-1 rounded-md'>Início</NavLink>

                {/*Dropdown com Popover */}
                <Popover className='relative'>
                    <Popover.Button className='hover:bg-primary-100 px-4 py-1 rounded-md'><span className='flex'>Países <MdExpandMore size={25} /></span></Popover.Button>
                    
                    <Transition as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel className='absolute mt-2 w-80 bg-primary-200 text-black-900 rounded-lg shadow-lg p-4'>
                            <div className='space-y-4'>
                                <NavLink to='/canada' className={'flex items-start space-x-3 hover:bg-primary-100 p-2 rounded'}>
                                    <div className='h-6 w-9 flex-shrink-0 justify-center'>
                                        <Ca className='h-full w-full object-cover'/>
                                    </div>
                                    <div>
                                        <p className='font-medium'>Canadá</p>
                                        <p className='text-sm text-gray-600'>Explore as montanhas geladas do Canadá e os cenários de Hollywood!</p>
                                    </div>
                                </NavLink>
                                <NavLink to='/usa' className={'flex items-start space-x-3 hover:bg-primary-100 p-2 rounded'}>
                                    <div className='h-6 w-9 flex-shrink-0 justify-center'>
                                        <Us className='h-full w-full object-cover'/>
                                    </div>
                                    <div>
                                        <p className='font-medium'>Estados Unidos</p>
                                        <p className='text-sm text-gray-600'>Explore o centro do mundo!</p>
                                    </div>
                                </NavLink>
                                <NavLink to='/japan' className={'flex items-start space-x-3 hover:bg-primary-100 p-2 rounded'}>
                                    <div className='h-6 w-9 flex-shrink-0 justify-center'>
                                        <Jp className='h-full w-full object-cover'/>
                                    </div>
                                    <div>
                                        <p className='font-medium'>Japão</p>
                                        <p className='text-sm text-gray-600'>Explore o oriente e a terra dos animês e mangás!</p>
                                    </div>
                                </NavLink>
                            </div>
                        </Popover.Panel>
                    </Transition>

                </Popover>

                <NavLink to='/about' className='hover:bg-primary-100 px-4 py-1 rounded-md'>Sobre</NavLink>
                <NavLink to='/contact' className='hover:bg-primary-100 px-4 py-1 rounded-md'>Contato</NavLink>

            </div>

            <div className='col-start-3 col-end-4 flex justify-end'>
                <Popover className='relative'>
                    <Popover.Button className='hover:bg-primary-100 px-4 py-1 rounded-md mr-3'><span className='flex'>Login <MdExpandMore size={25} /></span></Popover.Button>
                    <Popover.Panel className='absolute mt-2 w-55 right-3 bg-primary-200 text-black-900 rounded-lg shadow-lg p-4'>
                        <div>
                            <span className='mb-3 text-sm'>Faça seu login ou cadastre-se</span>
                            <div className='mb-2 mt-2'>
                                <span>E-mail</span>
                                <input type="text" className='w-45 bg-back rounded-md focus:outline-2 focus:outline-primary-500' />
                            </div>
                            <div>
                                <span>Senha</span>
                                <input type="password" className='w-45 bg-back rounded-md focus:outline-2 focus:outline-primary-500'/>
                            </div>
                                <input type="checkbox" className='bg-back mt-2 focus:ring-2 focus:ring-primary-500 accent-primary-500' /><span> Lembrar minha senha</span>
                            <div className='mt-2'>
                                <button className='px-3 py-1 bg-primary-500 rounded-md mr-2 hover:bg-primary-600 cursor-pointer'>Entrar</button>
                                <button className='px-3 py-1 bg-primary-500 rounded-md mr-2 hover:bg-primary-600 cursor-pointer'>Cadastrar</button>
                            </div>

                        </div>
                    </Popover.Panel>

                </Popover>
                {/* Botão Mobile */}
                <div className='lg:hidden'>
                    <button onClick ={() => setIsOpen(!isOpen)}>
                        <MdMenu size={25} className=''/>
                    </button>
                </div>
            </div>

        </div>

        {/* Menu Mobile */}
        {isOpen && (
            <div className='lg:hidden bg-primary-100 px-4 pb-4'>
                <NavLink to='/' className='block py-2 hover:underline'>Início</NavLink>
                
                {/* Dropdown Mobile */}
                <Popover className='relative'>
                    <Popover.Button className='block py-2 hover:underline'><span className='flex'>Países <MdExpandMore size={25} /></span></Popover.Button>
                    <Popover.Panel className='ml-4 mt-2 bg-primary-200 text-black-900 rounded-lg shadow-lg p-4'>
                        <div className='space-y-4'>
                            <NavLink to='/canada' className={'flex items-start space-x-3 hover:bg-primary-100 p-2 rounded'}>
                                <div className='h-6 w-9 flex-shrink-0 justify-center'>
                                    <Ca className='h-full w-full object-cover'/>
                                </div>
                                <div>
                                    <p className='font-medium'>Canadá</p>
                                </div>
                            </NavLink>
                            <NavLink to='/usa' className={'flex items-start space-x-3 hover:bg-primary-100 p-2 rounded'}>
                                <div className='h-6 w-9 flex-shrink-0 justify-center'>
                                    <Us className='h-full w-full object-cover'/>
                                </div>
                                <div>
                                    <p className='font-medium'>Estados Unidos</p>
                                </div>
                            </NavLink>
                            <NavLink to='/japan' className={'flex items-start space-x-3 hover:bg-primary-100 p-2 rounded'}>
                                <div className='h-6 w-9 flex-shrink-0 justify-center'>
                                    <Jp className='h-full w-full object-cover'/>
                                </div>
                                <div>
                                    <p className='font-medium'>Japão</p>
                                </div>
                            </NavLink>
                        </div>
                    </Popover.Panel>
                </Popover>

                <NavLink to='/about' className='block py-2 hover:underline'>Sobre</NavLink>
                <NavLink to='/contact' className='block py-2 hover:underline'>Contato</NavLink>
            </div>
        ) }       
    </nav>
  )
}

export default NavBar
