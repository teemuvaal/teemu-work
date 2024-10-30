import Job from './Job'
import config from '@/config'
import { Building2 } from 'lucide-react'

export default function Experience () {
    return (
        <div className='py-2'>
            <h1 className='font-bold text-md flex flex-row gap-1'><Building2 />Experience</h1>
            {config.jobExperience.map((job, index) => (
                <div key={index}>
                    {job.positions.map((position, posIndex) => (
                        <Job 
                            key={posIndex}
                            company={job.company}
                            title={position.title}
                            startDate={position.startDate}
                            endDate={position.endDate}
                            description={position.description}
                            website={position.website}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}