import Job from './job'
import jobExperience from './jobExperience.json'

export default function Experience () {
    return (
        <div className=''>
            <h1 className='font-strong text-md py-2'>Experience</h1>
            {jobExperience.map((job, index) => (
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