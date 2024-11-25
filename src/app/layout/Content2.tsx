import React from 'react'
import Grade from '../components/Grade'


function Content2() {
  return (
    <div className="ms:h-[708px] flex justify-center w-screen bg-gradient-to-b from-[#720000]  to-[#330F0F] p-5  py-14 ">
        <div className="w-[1100px] h-full text-black flex  flex-col gap-10 items-center justify-center">

        <h2 className='text-white text-2xl font-semibold'>Horario das aulas: 19:19</h2>

        <div className='flex flex-col'>
            <div className='flex gap-5 justify-around mac:flex-col mac:justify-center mac:items-center'>
                <div className='flex-col gap-5 flex'>
                    <Grade text="22/10/2024 -  Aula 01 (ao vivo) 
            "/>
                    <Grade text="29/10/2024 - Aula 02 (ao vivo)
            "/>
                    <Grade text="05/11/2024 - Aula 03 (ao vivo)
            "/>
                    <Grade text="12/11/2024 - Aula 04 (ao vivo)
            "/>
                </div>
                <div className='flex-col gap-5 flex'>
                <Grade text="19/11/2024 - Aula Bônus
            "/>
                    <Grade text="03/12/2024 - Aula 05 (ao vivo)
            "/>
                    <Grade text="10/12/2024 - Aula 06 (ao vivo)
            "/>
                    <Grade text="17/12/2024 - Encerramento
            "/>
                </div>

                
                
            </div>

            <div className='w-full flex justify-center items-center mt-14 '>
                    <div className='flex flex-col gap-2 w-[500px] md:w-[300px] p-4 border border-white bg-vermelho rounded-md text-white justify-center items-center text-center'>

                        <p className='font-semibold' >BÔNUS</p>
                        <p className='font-semibold'>
                        PQP + DIVINAS + MULHER CÍCLICA</p>
                    </div>
                </div>
        </div>


        </div>
      
    </div>
  )
}

export default Content2
