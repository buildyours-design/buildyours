import React from 'react'
import { clientInfo } from '@/constants/index'

const UserInfo = () => {
  return (
     <div className='min-w-screen sxs:px-1 sm:px-0 sm:overflow-hidden sxs:overflow-x-auto'>
            <table className=' sxs:w-[300vw] sm:w-full '>
              <caption className="lg:text-[1.7em] sxs:text-xl sm:text-[clamp(20px,8vw,30px)] sxs:text-start sm:text-center">
                  manage your clients
              </caption>
              <thead>
                <tr className="lg:text-base sxs:text-xs table_row">
                  <th scope='col'>first name</th>
                  <th scope='col'>last name</th>
                  <th scope='col'>email</th>
                  <th scope='col'>phone number</th>
                  <th scope="col">description</th>
                </tr>
              </thead>
              <tbody>
                {clientInfo[0].body.map((info)=>(
                  <tr className="table_row " key={Math.random()}>
                     {Object.keys(info).map((item)=>(
                       <td className="sm:px-2" key={Math.random()}>{info[item]}</td>
                     ))}
                  </tr>
                ))}
              </tbody>
              
            </table>
          </div>
  )
}

export default UserInfo