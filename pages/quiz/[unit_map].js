import React from 'react';
import UnitCard from '../../components/UnitCard';

const UnitMap = ({unitMap}) => {


    const AllUnits = [...new Set(unitMap.map((cur)=> cur.unit))]
    const unitId = [...new Set(unitMap.map((cur)=> cur.unitId))]
    console.log(unitId);


    
  return (
    <div className='flex flex-col items-center mt-5 min-h-[50vh]'>
    {
        AllUnits.map((curUnit, id)=> {

            return(
            <UnitCard key={id} curUnit={curUnit} unitMap={unitMap}/>
            )

        })
    }
   

    </div>
  )
}




export async function getServerSideProps({params:{unit_map}}) {
    
    // console.log(unit_map);

    const res = await fetch(`${process.env.BASE_URL}/api/admin/quiz/${unit_map}`)
    const unitMap = await res.json();
    // console.log(unitMap);

    return {
        props:{
            unitMap
        }
    }
}



export default UnitMap;