import React from 'react'
import './Packages.css'
import PackagesCards from './PackagesCards'
import kodaikanal from '../../asset/Packages image/kodaikanal.jpg'
import madurai from '../../asset/Packages image/Madurai.jpg'
import ooty from '../../asset/Packages image/ooty.jpeg'
import pamban from '../../asset/Packages image/pamban.jpg'
import pondichery from '../../asset/Packages image/pondichery.jpg'

const Packages = () => {
    return (
        <div className='packages-container' id = 'packages'>
            <div className='text-center p-5'>
                <h1 className='fw-bold package-head'>Packages</h1>
            </div>
            <div className='package-row p-5'>

                    {/*4 colum  */}
                <div className='packages-card-container d-flex align-items-center justify-content-around g-2 mb-4'>
                    {/* 2 colum */}
                    <div className='d-flex align-items-center justify-content-around g-2 packages-card-container-2'>
                        <PackagesCards
                            Packagesimg={kodaikanal}
                            PackagesName='Kodaikanal'
                            PackagesDisc='The place was Kodaikanal it is a hills and is called by a ,queen of hills so many pepole are going to visit'
                        />
                        <PackagesCards
                            Packagesimg={madurai}
                            PackagesName='Maduari'
                            PackagesDisc='The place was Kodaikanal it is a hills and is called by a ,queen of hills so many pepole are going to visit'
                        />
                    </div>
                    <div className='d-flex align-items-center justify-content-around g-2 packages-card-container-2'>
                        <PackagesCards
                            Packagesimg={pamban}
                            PackagesName='Rameswaram'
                            PackagesDisc='The place was Kodaikanal it is a hills and is called by a ,queen of hills so many pepole are going to visit'
                        />
                        <PackagesCards
                            Packagesimg={pondichery}
                            PackagesName='Pondichery'
                            PackagesDisc='The place was Kodaikanal it is a hills and is called by a ,queen of hills so many pepole are going to visit'
                        />
                    </div>
                </div>



                 {/*4 colum  */}
                 <div className='packages-card-container d-flex align-items-center justify-content-around g-2'>
                    {/* 2 colum */}
                    <div className='d-flex align-items-center justify-content-around g-2 packages-card-container-2'>
                        <PackagesCards
                            Packagesimg={ooty}
                            PackagesName='Ooty'
                            PackagesDisc='The place was Kodaikanal it is a hills and is called by a ,queen of hills so many pepole are going to visit'
                        />
                        <PackagesCards
                            Packagesimg={madurai}
                            PackagesName='Maduari'
                            PackagesDisc='The place was Kodaikanal it is a hills and is called by a ,queen of hills so many pepole are going to visit'
                        />
                    </div>
                    <div className='d-flex align-items-center justify-content-around g-2 packages-card-container-2'>
                        <PackagesCards
                            Packagesimg={pamban}
                            PackagesName='Rameswaram'
                            PackagesDisc='The place was Kodaikanal it is a hills and is called by a ,queen of hills so many pepole are going to visit'
                        />
                        <PackagesCards
                            Packagesimg={pondichery}
                            PackagesName='Pondichery'
                            PackagesDisc='The place was Kodaikanal it is a hills and is called by a ,queen of hills so many pepole are going to visit'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages