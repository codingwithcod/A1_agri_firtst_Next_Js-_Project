import React from 'react';
import Link from 'next/link'


const UnitCard = ({curUnit, unitMap}) => {
    // console.log(unitMap);

    const UnitWiseArray = unitMap.filter((cur) => {
        return curUnit === cur.unit
    })

    const curUnitId = [...new Set(UnitWiseArray.map((cur)=> cur.unitId))]

    const unitId = curUnitId.toString()

  return (
            <Link  href={`/quiz/start/${unitId}`}>
                <div   className="m-3 p-2 border border-indigo-300 text-center w-[90%] md:w-[50%] text-2xl bg-gray-50 hover:bg-gray-100 shadow-md cursor-pointer">
                <h3>{curUnit}</h3>
                </div>
             </Link>
  )
}

export default UnitCard