import React from 'react';
import teamDetails from '../../utils/teamDetails'
import TeamDetails from "../core/TeamDetails"

const Team = () => {
  return (
    <div  id = "team" className='flex  flex-col  items-center gap-4'>
      <div class="w-full flex items-center justify-center flex-col p-8 rounded-lg">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Team</h1>
        <div className="bg-customDarkBlue h-[4px] w-1/5 mt-1 mx-auto"></div>
        <TeamDetails reviews={teamDetails}></TeamDetails>
      </div>
      </div>

    </div>
  );
}

export default Team;