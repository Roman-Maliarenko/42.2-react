import './style.css'
import Button from "../Button/Button"
import {lessonData} from './data'

function LessonCard (){
    return (
        <div className="lesson-card">
            <h3>Lesson {lessonData.lesson_number}</h3>
            <div>{lessonData.lesson_teacher}</div>
            <Button/>
        </div>
        
)};

export default LessonCard;