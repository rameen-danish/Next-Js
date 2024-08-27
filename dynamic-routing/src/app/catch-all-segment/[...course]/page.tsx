"use client";
interface Params{
    course:number[];
}
interface CourseProps{
    params:Params
}
export default function Class({params}:CourseProps){
    return(
        <div>
            <h2>Day {params.course[0]}</h2>
            <h2>Lecture {params.course[1]}</h2>
        </div>
    )
}