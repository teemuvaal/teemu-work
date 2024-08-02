import Job from './job'
import config from '@/config'

export default function Experience () {
    return (
        <div className='py-2'>
            <h1 className='font-strong text-md'>Experience</h1>
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
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}