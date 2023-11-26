import { Button, Timeline } from 'flowbite-react';
import { FiCircle } from 'react-icons/fi';

export default function Timelinehome({data}) {
  return (
    <Timeline>
     {data.map((item)=>{
      return(
         <Timeline.Item>
        <Timeline.Point icon={FiCircle} />
        <Timeline.Content>
          <Timeline.Time>
            {item.categoryName}
          </Timeline.Time>
          <Timeline.Title>
            {item.categorySlogan}
          </Timeline.Title>
          <Timeline.Body>
            <p>
              {item.categoryDescription}
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      )
     })}
    </Timeline>
  )
}