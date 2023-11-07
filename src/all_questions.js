
export let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : "101" ,
            "marks" : [
                {"subject" : "English" , "mark" : 25}, 
                {"subject" : "Maths", "mark" : 48}, 
                {"subject" : "Physics", "mark" : 40}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 20}
            ]
        },
        {
            "name" : "Aju" ,
            "id" :  "102",
            "marks" : [
                {"subject" : "English" , "mark" : 35}, 
                {"subject" : "Maths", "mark" : 38}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 30}
            ]
        },
        {
            "name" : "Mini SS" ,
            "id" : "103" ,
            "marks" : [
                {"subject" : "English" , "mark" : 12}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 18}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 40}
            ]
        },
        {
            "name" : "Binu" ,
            "id" : "104" ,
            "marks" : [
                {"subject" : "English" , "mark" : 49}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 47}, 
                {"subject" : "Chemistry", "mark" : 46},
                {"subject" : "Computer", "mark" : 50}
            ]
        }
    ]
}
// code

export const printClassName = ()=>{
    return(classObj.name)
}

export const printTeachersName = ()=>{
    return(classObj.teacherName)
}

export const printStudentsNames = ()=>{
    let result = []

    classObj.students.forEach((student)=>{
        result.push(student.name)
    })
    return result
}

export const printStudentIds = ()=>{
    let result = []
    classObj.students.forEach((student)=>{
        result.push(student.id)
    })
    return result
}

export const printSubjectsOfOne = (id)=>{
    let student = classObj.students.find(student => student.id === id)
    let result = []
    student?.marks.forEach(subjectDetails => result.push(subjectDetails.subject))
    return (result.length > 0 ? result :'student not found' )
    
}

export const printMarksOfOne = (id)=>{
    let student = classObj.students.find(student => student.id === id)
    let result = {}
    let temp = {}
    student.marks.forEach(subjectDetails => {
        temp[subjectDetails.subject] = subjectDetails.mark
        Object.assign(result,temp)
        })
    return (result ? result :'student not found' )
}

export const averageMarkOfOne =(id)=>{
    let student = classObj.students.find(student => student.id === id)
    let total=student.marks.reduce((total,value)=>total+=value.mark,0)
    let number = student.marks.length
    let average = total/number

    return(average)
}

export const totalMarkOfOne =(id)=>{
    let student = classObj.students.find(student => student.id === id)
    let total = student.marks.reduce((total,value)=>total+=value.mark,0)
     
    return(total)
}

export const averageMarkOfSubject = (sub) =>{

    let {students} = classObj
    let total=0
    students.forEach((student)=>{
        student.marks.forEach((subject)=>{
            if(subject.subject==sub)
            total+=subject.mark
        })
    })
    let average=total/students.length
    
    return(average)
}

export const totalMarkOfSubject = (sub) =>{

    let { students } = classObj
    let total = 0 
    students.forEach((student) => {
        student.marks.forEach((subject) => {
            if(subject.subject === sub)
            total += subject.mark
        })
    })
    
    return(total)
}

//Destructuring students for future use
export let { students } = classObj

export const topperOfSub = (sub) =>{
    
    let current_max = 0
    let topper = ''
    students.forEach((student)=>{
            student.marks.forEach((subject)=>{
                if(subject.subject == sub && subject.mark > current_max)
                {
                    current_max = subject.mark
                    topper = student.name
                }
            })
        })
    
        return(topper)
}

export const bottomOfSub = (sub) =>{
    
    let current_min = 100
    let bottom = ''
    students.forEach((student)=>{
            student.marks.forEach((subject)=>{
                if(subject.subject == sub && subject.mark < current_min)
                {
                    current_min = subject.mark
                    bottom = student.name
                }
            })
        })

        return(bottom)
}

export const topper = ()=>{
    let max_total = 0
    let topper = ''
    students.forEach(student =>{
        let total = student.marks.reduce((total,value) => total += value.mark,0)
        if(total > max_total)
        {
            max_total = total
            topper = student.name
        }
    })
    
    return[topper,max_total]
}

export const low_scorer = ()=>{
    let min_total = 500
    let lowScorer = ''
    students.forEach(student =>{
        let total = student.marks.reduce((total,value) => total += value.mark,0)
        if(total < min_total)
        {
            min_total = total
            lowScorer = student.name
        }
    })
    
    return[lowScorer,min_total]
}

export const subjectWithHighAvg = ()=>{
    const aggregate = {"English":0,"Maths":0,"Physics":0,"Chemistry":0,"Computer":0}
    students.forEach(student =>{
        student.marks.forEach(sub=>{
            aggregate[sub.subject] += sub.mark
        })
    })
    let maxValue = 0
    let maxSub = ''
    for(let key in aggregate){
        aggregate[key] = aggregate[key]/students.length
        if(aggregate[key] > maxValue){
            maxValue = aggregate[key]
            maxSub = key
        }
    }
    
    return(maxSub)
}

const fetchSubs = () =>{
    let subs = {}
    students[0].marks.forEach((sub) => subs[sub.subject] = 0)
    return subs
}

export const totalMarkOfSubs = () =>{

    const aggregate = fetchSubs()
    students.forEach(student =>{
    student.marks.forEach( sub => aggregate[sub.subject] += sub.mark)
    })
    return (aggregate ? aggregate : "no result")
}


export const subjectWithLowAvg = ()=>{
    const aggregate = {"English":0,"Maths":0,"Physics":0,"Chemistry":0,"Computer":0}
    students.forEach(student =>{
        student.marks.forEach(sub=>{
            aggregate[sub.subject] += sub.mark
        })
    })

    let minValue = 100
    let minSub = ''
    for(let key in aggregate){
        aggregate[key] = aggregate[key]/students.length
        if(aggregate[key] < minValue){
            minValue = aggregate[key]
            minSub = key
        }
    }
  
    return(minSub)
}

export const averageofClass = ()=>{
    let total = 0
    students.forEach((student)=>{
        total += student.marks.reduce((total,value)=>total+=value.mark,0)
    })
    let avg = total / students.length
    return(avg)
}

export const totalofClass = ()=>{
    let total = 0
    students.forEach((student)=>{
        total += student.marks.reduce((total,value) => total += value.mark,0)
    })
   
    return(total)
}

export const averageOfEachSub = () =>{
    let totalMarks = totalMarkOfSubs()
    for(let sub in totalMarks)
    totalMarks[sub] = totalMarks[sub] / students.length

    return totalMarks
}

export const topperSubject = ()=>{
    const markList = totalMarkOfSubs()
    let topMark = 0
    let topSub = ''
    for(let sub in markList)
    if(markList[sub] > topMark){
        topSub = sub
        topMark = markList[sub] 
    }
    
    return [topSub,topMark]
}

export const lowerSubject = ()=>{
    const markList = totalMarkOfSubs()
    let lowMark = 500
    let lowSub = ''
    for(let sub in markList)
    if(markList[sub] < lowMark){
        lowSub = sub
        lowMark = markList[sub] 
    }
    return [lowSub,lowMark]
}

export const toppersByAvg = ()=>{
    let topper = []
    let markList = []
    let studentList = []
    students.forEach(student =>{
        let total = student.marks.reduce((total,value) => total += value.mark,0)
        total = total / student.marks.length
        markList.push(total)
        studentList.push(student.name)
    })
    let highestAvg = Math.max(...markList)

    for(let i=0;i < markList.length;i++)
    markList[i] == highestAvg && topper.push(studentList[i])

    return [topper,highestAvg]
}

export const lowersByAvg = ()=>{
    let lower = []
    let markList = []
    let studentList = []
    students.forEach(student =>{
        let total = student.marks.reduce((total,value)=>total+=value.mark,0)
        total = total / student.marks.length
        markList.push(total)
        studentList.push(student.name)
    })
    let lowestAvg = Math.min(...markList)

    for(let i=0;i < markList.length;i++)
    markList[i] == lowestAvg && lower.push(studentList[i])

    return [lower,lowestAvg]
}

export const toppers = ()=>{
    let topper=[]
    let markList =[]
    let studentList = []
    students.forEach(student =>{
        let total = student.marks.reduce((total,value)=>total+=value.mark,0)
        markList.push(total)
        studentList.push(student.name)
    })
    let highestScore = Math.max(...markList)

    for(let i=0;i < markList.length;i++)
    (markList[i] == highestScore ) && topper.push(studentList[i])

    return[topper,highestScore]
}

export const lowers = ()=>{
    let lower = []
    let markList = []
    let studentList = []
    students.forEach(student =>{
        let total = student.marks.reduce((total,value)=>total+=value.mark,0)
        markList.push(total)
        studentList.push(student.name)
    })
    let lowestScore = Math.min(...markList)

    for(let i = 0;i < markList.length;i++)
    markList[i] == lowestScore && lower.push(studentList[i])

    return[lower,lowestScore]
}

export const filterStudentsMinLimit = (mark_limit,sub)=>{
    let count = 0
    students.forEach( student => {
        let found = student.marks.find(subject => {
            if(subject.subject == sub && subject.mark < mark_limit )
            return true
        })
        found && count++
    })

    return(count)
}

export const filterStudentsMaxLimit = (mark_limit,sub)=>{
    let count = 0
    students.forEach( student => {
        let found = student.marks.find(subject => {
            if(subject.subject == sub && subject.mark > mark_limit )
            return true
        })
        found && count++
    })

    return(count)
}

export const filterStudentsByLowerLimit = (min_score) => {
    let count = 0;
    students.forEach((student) => {
        let found = student.marks.find((markDetails) => markDetails.mark < min_score)
        found && count++
    })

    return(count)
}

export const filterStudentsByUpperLimit = (min_score) => {
    let count = 0;
    students.forEach((student) => {
        let found = student.marks.find((markDetails) => markDetails.mark > min_score)
        found && count++
    })

    return(count)
}

export const percentageOfStudentsAbove = (sub,mark) => {
    let count = 0;
    students.forEach((student)=>{
        let found = student.marks.find(details => details.subject == sub && details.mark > mark)
        found && count++ 
    })
    let percentage = (count / students.length) * 100

    return(percentage)
}

export const percentageOfStudentsBelow = (sub,mark) => {
    let count = 0;
    students.forEach((student)=>{
        let found = student.marks.find(details => details.subject == sub && details.mark < mark)
        found && count++ 
    })
    let percentage = (count / students.length) * 100

    return(percentage)
}

export const percentageOfStudentsAboveTotal = (mark) => {
    let count = 0;
    students.forEach((student) => {
        let found = student.marks.find((markDetails) => markDetails.mark < mark)
        found && count++
    })
    let percentage = (count / students.length) * 100

    return(percentage)
}

export const percentageOfStudentsBelowTotal = (mark) => {
    let count = 0;
    students.forEach((student) => {
        let found = student.marks.find((markDetails) => markDetails.mark > mark)
        found && count++
    })
    let percentage = (count / students.length) * 100

    return(percentage)
}

export const studentsWithHighPercent = () =>{
    let studentList = []
    let percentList = []
    let result = []
    const maximumMark = 50

    students.forEach((student) => {
        let percentage = student.marks.reduce((total,value) => total += value.mark,0)
        percentage = (percentage / (student.marks.length * maximumMark)) * 100
        percentList.push(percentage)
        studentList.push(student.name)
    })
    let max_value = Math.max(...percentList)

    for( let i = 0; i<percentList.length; i++)
        percentList[i] == max_value && result.push(studentList[i])

    return(result.length > 0 ? result : 'no result')
}

export const studentsWithLowPercent = () =>{
    let studentList = []
    let percentList = []
    let result = []
    const maximumMark = 50

    students.forEach((student) => {
        let percentage = student.marks.reduce((total,value) => total += value.mark,0)
        percentage = (percentage / (student.marks.length * maximumMark)) * 100
        percentList.push(percentage)
        studentList.push(student.name)
    })
    let min_value = Math.min(...percentList)

    for( let i = 0; i<percentList.length; i++)
        percentList[i] == min_value && result.push(studentList[i])

    return(result.length > 0 ? result : 'no result')
}

export const subjectsWithHighestPercent = () =>{
    const maximumMark = 50
    let result = []
    let percentList = Object.values(totalMarkOfSubs())
    let subjectList = Object.keys(totalMarkOfSubs())
    percentList.forEach((sub,idx) => percentList[idx] = (sub / (students.length * maximumMark)) * 100)
    let max_value = Math.max(...percentList)

    for( let i = 0; i<percentList.length; i++)
        percentList[i] == max_value && result.push(subjectList[i],max_value)

    return(result.length > 0 ? result : 'no result')
}

export const subjectsWithLowestPercent = () =>{
    const maximumMark = 50
    let result = []
    let percentList = Object.values(totalMarkOfSubs())
    let subjectList = Object.keys(totalMarkOfSubs())
    percentList.forEach((sub,idx) => percentList[idx] = (sub / (students.length * maximumMark)) * 100)
    let min_value = Math.min(...percentList)

    for( let i = 0; i<percentList.length; i++)
        percentList[i] == min_value && result.push(subjectList[i],min_value)
    
    return(result.length > 0 ? result : 'no result')
}

export const studentsWithHighestPercentIn = (sub) =>{
    
    let maximumMark = 50
    let percentList = []
    let studentList = []
    let result = []

    students.forEach((student)=>{
        let percentage = student.marks.find(details => details.subject == sub).mark
        percentage = (percentage / maximumMark) * 100
        percentList.push(percentage)
        studentList.push(student.name)
    })
    let max_value = Math.max(...percentList)

    for( let i =0; i<percentList.length; i++)
        percentList[i] == max_value && result.push(studentList[i])
    
    return(result.length > 0 ? result : 'no result')
}

export const studentsWithLowestPercentIn = (sub) =>{
    
    let maximumMark = 50
    let percentList = []
    let studentList = []
    let result = []

    students.forEach((student)=>{
        let percentage = student.marks.find(details => details.subject == sub).mark
        percentage = (percentage / maximumMark) * 100
        percentList.push(percentage)
        studentList.push(student.name)
    })
    let min_value = Math.min(...percentList)

    for( let i =0; i<percentList.length; i++)
        percentList[i] == min_value && result.push(studentList[i])

    return(result.length > 0 ? result : 'no result')
}

// med questions

export const topScoresOfEachSub = () =>{

    let markList = fetchSubs()
     students.forEach((student) => {
         student.marks.forEach((detail)=>{
            if(detail.mark > markList[detail.subject])
            markList[detail.subject] = detail.mark
         })
     })
     return markList
}

export const lowScoresOfEachSub = () =>{

    let markList = fetchSubs()
    for(let key in markList)
    markList[key] = 100

    students.forEach((student) => {
        student.marks.forEach((detail)=>{
            if(detail.mark < markList[detail.subject] )
            markList[detail.subject] = detail.mark 
        })
    })
    return markList
}

export const toppersOfSubs = () =>{

    let markList = topScoresOfEachSub()
    let result = []

    students.forEach((student) => {
        let found = student.marks.find(detail => {
            if(detail.mark == markList[detail.subject] && detail.subject in markList)
            return true
        })
        found && result.push(student.name)
    })
    return result
}

export const lowersOfSubs = () =>{

    let markList = lowScoresOfEachSub()
    let result = []

    students.forEach((student) => {
        let found = student.marks.find(detail => {
            if(detail.mark == markList[detail.subject] && detail.subject in markList)
            return true
        })
        found && result.push(student.name) 
    })
    return result
}

export const topScorersOfEachSub = () =>{

    let markList = topScoresOfEachSub()
    let result = []

    for(let key in markList)
    {
        students.forEach((student) => {
            let found = student.marks.find(details => details.mark == markList[key] && details.subject == key)
            found && result.push(student.name)
        })    
    }
    return result
}

export const lowScorersOfEachSub = () =>{

    let markList = lowScoresOfEachSub()
    let result = []

    for(let key in markList)
    {
        students.forEach((student) => {
            let found = student.marks.find(details => details.mark == markList[key] && details.subject == key)
            found && result.push(student.name)
        })    
    }
    return result
}




// tough questions

export const highestPercentageOf = (id) =>{
    let student = students.find((student) => student.id == id)
    let maximumMark = 50
    let result = []
    let subjectList = []
    let markList = []
    student.marks.forEach(detail => subjectList.push(detail.subject))
    student.marks.forEach(detail => markList.push(detail.mark))
    markList.forEach((mark,idx) =>  markList[idx] = (mark/ maximumMark) * 100)
    let max_value = Math.max(...markList)
    
    for(let i = 0; i < markList.length ; i++)
    markList[i] == max_value && result.push(subjectList[i])

    return (result.length > 0 ? result : "no result")
}

export const lowestPercentageOf = (id) =>{
    let student = students.find((student) => student.id == id)
    let maximumMark = 50
    let subjectList = []
    let result = []
    let markList = []
    student.marks.forEach(detail => subjectList.push(detail.subject))
    student.marks.forEach(detail => markList.push(detail.mark))
    markList.forEach((mark,idx) =>  markList[idx] = (mark/ maximumMark) * 100)
    let min_value = Math.min(...markList)
    
    for(let i = 0; i < markList.length ; i++)
    markList[i] == min_value && result.push(subjectList[i])

    return (result.length > 0 ? result : "no result")
}

export const subjectsScoredAbove = (mark_lim) =>{

    let prev_array = []
    let result = []

    students.forEach((student) => {
        let res_array = student.marks.map(detail => detail.mark > mark_lim && detail.subject)
        res_array = res_array.filter(item => typeof item == "string")

        if(prev_array.length > 0)
            prev_array.forEach((item,idx) => res_array.indexOf(item) == -1 ? prev_array[idx] = null : '')
        else
        prev_array = res_array
    })
    prev_array = prev_array.filter(item => item != null)

    result.push(prev_array.length > 0 ? prev_array : 'no subjects')
    return (result.length > 0 ? result : "no result")
}

export const subjectsScoredBelow = (mark_lim) =>{

    let prev_array = []
    let result = []
    
    students.forEach((student) => {
        let res_array = student.marks.map(detail => detail.mark < mark_lim && detail.subject)
        res_array = res_array.filter(item => typeof item == "string")

        if(prev_array.length > 0)
            prev_array.forEach((item,idx) => res_array.indexOf(item) == -1 ? prev_array[idx] = null : '')
        else
        prev_array = res_array
    })
    prev_array = prev_array.filter(item => item != null)

    result.push(prev_array.length > 0 ? prev_array : 'no subjects')
    return (result.length > 0 ? result : "no result")
}

export const averageMarksOfSubsAbove = (mark_lim) =>{
    
    let totalMark = totalMarkOfSubs()
    let result = []

    for(let key in totalMark)
        totalMark[key] = totalMark[key] / students.length
    
    for(let key in totalMark)
        totalMark[key] > mark_lim && result.push(key) 

        return (result.length > 0 ? result : "no result")
}

export const averageMarksOfSubsBelow = (mark_lim) =>{
    
    let totalMark = totalMarkOfSubs()
    let result = []

    for(let key in totalMark)
        totalMark[key] = totalMark[key] / students.length
    
    for(let key in totalMark)
        totalMark[key] < mark_lim && result.push(key) 

        return (result.length > 0 ? result : "no result")
}

export const subjectsWithHighestScores = () =>{

    const markList = topScoresOfEachSub()
    let maxValue = Math.max(...Object.values(markList))
    let result = []
    
    for(let key in markList)
    maxValue == markList[key] && result.push(key)

    return (result.length > 0 ? result : "no result")
}

export const subjectsWithLowestScores = () =>{

    const markList = lowScoresOfEachSub()
    let minValue = Math.min(...Object.values(markList))
    let result = []
    
    for(let key in markList)
    minValue == markList[key] && result.push(key)

    return (result.length > 0 ? result : "no result")
}

export const studentsScoringAboveAverage = () =>{
    const classAverage = averageofClass()
    let result = []

    students.forEach(student => {
        let studentTotal = student.marks.reduce((total,value) => total += value.mark , 0)
        studentTotal > classAverage && result.push(student.name)
    })

    return (result.length > 0 ? result : "no result")
}

export const studentsScoringBelowAverage = () =>{
    const classAverage = averageofClass()
    let result = []

    students.forEach(student => {
        let studentTotal = student.marks.reduce((total,value) => total += value.mark , 0)
        studentTotal < classAverage && result.push(student.name)
    })

    return (result.length > 0 ? result : "no result")
}

export const subjectsAboveAverage = () =>{

    let markList = averageOfEachSub()
    const average = averageofClass()
    let result = []

    for(let key in markList)
    markList[key] > average && result.push(key)

    return (result.length > 0 ? result : "no result")
}

export const subjectsBelowAverage = () =>{

    let markList = averageOfEachSub()
    const average = averageofClass()
    let result = []

    for(let key in markList)
    markList[key] < average && result.push(key)

    return (result.length > 0 ? result : "no result")
}

export const subWithStudentsAbove = (mark_limit) =>{
    
    let setPercentage = fetchSubs()
    let result = []

    for(let key in setPercentage)
    setPercentage[key] = percentageOfStudentsAbove(key,mark_limit)

    let max_value = Math.max(...Object.values(setPercentage))
    for(let key in setPercentage)
    setPercentage[key] == max_value && result.push("\nhighest percentage of students in ",key)

    return result
}

export const subWithStudentsBelow = (mark_limit) =>{
    
    let setPercentage = fetchSubs()
    let result = []

    for(let key in setPercentage)
    setPercentage[key] = percentageOfStudentsBelow(key,mark_limit)

    let max_value = Math.max(...Object.values(setPercentage))
    for(let key in setPercentage)
    setPercentage[key] == max_value && result.push("\nhighest percentage of students in ",key)

    return result
}

export const leastSubWithStudentsAbove = (mark_limit) =>{
    
    let setPercentage = fetchSubs()
    let result = []

    for(let key in setPercentage)
    setPercentage[key] = percentageOfStudentsAbove(key,mark_limit)

    let min_value = Math.min(...Object.values(setPercentage))
    for(let key in setPercentage)
    setPercentage[key] == min_value && result.push("\nlowest percentage of students in ",key)

    return result
}

export const leastSubWithStudentsBelow = (mark_limit) =>{
    
    let setPercentage = fetchSubs()
    let result = []

    for(let key in setPercentage)
    setPercentage[key] = percentageOfStudentsBelow(key,mark_limit)

    let min_value = Math.min(...Object.values(setPercentage))
    for(let key in setPercentage)
    setPercentage[key] == min_value && result.push("\nlowest percentage of students in ",key)

    return result
}


export const percentOfStudentsAboveAverage = () => {
    
    const classAverage = averageofClass()
    let setCount = fetchSubs()
    let percent = 0;

    for(let key in setCount){
        let temp_value = percentageOfStudentsAbove(key,classAverage) 
        if(temp_value > percent)
        percent = temp_value
    }

    return("\n percent of students scoring above average in atleats 1 ",percent)
}

export const percentOfStudentsBelowAverage = () => {
    
    const classAverage = averageofClass()
    let setCount = fetchSubs()
    let percent = 0;

    for(let key in setCount){
        let temp_value = percentageOfStudentsBelow(key,classAverage) 
        if(temp_value > percent)
        percent = temp_value
    }

    return (percent)
}

export const studentsAveragingAboveInMost = () =>{

    let majority_factor = students[0].marks.length / 2
    let averageMark = averageofClass()
    let result = []

    students.forEach((student) => {
        
        let res_array = student.marks.filter((detail) => detail.mark >= averageMark)
        res_array.length >= majority_factor && result.push(student.name)
    })
    return result
}

export const studentsAveragingBelowInMost = () =>{

    let majority_factor = students[0].marks.length / 2
    let averageMark = averageofClass()
    let result = []

    students.forEach((student) => {
        
        let res_array = student.marks.filter((detail) => detail.mark <= averageMark)
        res_array.length >= majority_factor && result.push(student.name)
    })
    return result
}

// saturday

export const filterStudentsByMinScore = (min_score) => {
    let result = [];
    students.forEach((student) => {
        let found = student.marks.find((markDetails) => markDetails.mark < min_score)
        //found ? '' : result.push(count)
        found && result.push(student)
    })

    return result
}

export const filterStudentsByMaxScore = (max_score) => {
    let result = [];
    students.forEach((student) => {
        let found = student.marks.find((markDetails) => markDetails.mark > max_score)
        //found ? '' : result.push(found)
        found && result.push(student)
    })

    return result
}

export const subjectsAveragingAboveClass = () =>{

    const classAvg = averageofClass() / students[0].marks.length
    const subs = fetchSubs()
    let result = []
    
    for(let key in subs){
        let percent = percentageOfStudentsAbove(key,classAvg)
        percent > 50 && result.push(key) 
    }
    return result   
}

export const subjectsAveragingBelowClass = () =>{

    const classAvg = averageofClass() / students[0].marks.length
    const subs = fetchSubs()
    let result = []
    
    for(let key in subs){
        let percent = percentageOfStudentsBelow(key,classAvg)
        percent > 50 && result.push(key) 
    }
    return(result ? result : "no result")
}

const studentsAboveStudentInAll = (id) => {

    let avg = averageMarkOfOne(id)
    let result = {}
    result["percent"] = percentageOfStudentsAboveTotal(avg)
    
    return(result ? result : "no students")
}

const studentsBelowStudentInAll = (id) => {

    let avg = averageMarkOfOne(id)
    let result = {}
    result["percent"] = percentageOfStudentsBelowTotal(avg)

    return(result ? result : "no students")
}


const studentsAboveStudentInEach = (id) => {

    const subs = fetchSubs()
    let avg = averageMarkOfOne(id)
    let result = {}

    for(let key in subs)
        result[key] = percentageOfStudentsAbove(key,avg)
    
    return(result ? result : "no students")
}

const studentssBelowStudentInEach = (id) => {

    const subs = fetchSubs()
    let avg = averageMarkOfOne(id)
    let result = {}

    for(let key in subs)
        result[key] = percentageOfStudentsBelow(key,avg)
    
    return(result ? result : "no students")
}

export const studentsAveragingAbove = (id) =>{

    let result = []
    let avg = averageMarkOfOne(id)
    result = filterStudentsByMinScore(avg)
    result = result.map((item) => item.name)

    return(result.length > 0 ? result : "no students")
}

export const studentsAveragingBelow = (id) =>{

    let result = []
    let avg = averageMarkOfOne(id)
    result = filterStudentsByMaxScore(avg)
    result = result.map((item) => item.name)

    return(result.length > 0 ? result : "no students")
}

const subjectsAveragingAboveStudent = (id) => {

    let result = []
    let avg = averageMarkOfOne(id)
    let subjectList = averageOfEachSub()

    for(let sub in subjectList)
    subjectList[sub] > avg && result.push(sub)

    return (result.length > 0 ? result : "no result")
}

const subjectsAveragingBelowStudent = (id) => {

    let result = []
    let avg = averageMarkOfOne(id)
    let subjectList = averageOfEachSub()

    for(let sub in subjectList)
    subjectList[sub] < avg && result.push(sub)

    return (result.length > 0 ? result : "no result")
}

export const subjectsMaxPercentStudentsAboveStudent = (id) =>{

    let result = []
    let percentList = fetchSubs()
    let avg = averageMarkOfOne(id)
    
    for(let key in percentList)
    percentList[key] = percentageOfStudentsAbove(key,avg)

    let percentValues = Object.values(percentList)
    let subjects = Object.keys(percentList)
    let max_value = Math.max(...percentValues)

    for(let i =0; i < subjects.length ; i++)
    max_value == percentValues[i] && result.push(subjects[i])

    return result
}

export const subjectsMaxPercentStudentsBelowStudent = (id) =>{

    let result = []
    let percentList = fetchSubs()
    let avg = averageMarkOfOne(id)
    
    for(let key in percentList)
    percentList[key] = percentageOfStudentsBelow(key,avg)

    let percentValues = Object.values(percentList)
    let subjects = Object.keys(percentList)
    let max_value = Math.max(...percentValues)

    for(let i =0; i < subjects.length ; i++)
    max_value == percentValues[i] && result.push(subjects[i])

    return result
}

export const subjectsMinPercentStudentsAboveStudent = (id) =>{

    let result = []
    let percentList = fetchSubs()
    let avg = averageMarkOfOne(id)
    
    for(let key in percentList)
    percentList[key] = percentageOfStudentsAbove(key,avg)

    let percentValues = Object.values(percentList)
    let subjects = Object.keys(percentList)
    let min_value = Math.min(...percentValues)

    for(let i =0; i < subjects.length ; i++)
    min_value == percentValues[i] && result.push(subjects[i])

    return result
}

export const subjectsMinPercentStudentsBelowStudent = (id) =>{

    let result = []
    let percentList = fetchSubs()
    let avg = averageMarkOfOne(id)
    
    for(let key in percentList)
    percentList[key] = percentageOfStudentsBelow(key,avg)

    let percentValues = Object.values(percentList)
    let subjects = Object.keys(percentList)
    let min_value = Math.min(...percentValues)

    for(let i =0; i < subjects.length ; i++)
    min_value == percentValues[i] && result.push(subjects[i])

    return result
}

const percentOfStudentsScoringAboveAvgInTotal = () => {

    let avg = averageofClass() / students[0].marks.length
    let result = percentageOfStudentsAboveTotal(avg)

    return result
}

const percentOfStudentsScoringBelowAvgInTotal = () => {

    let avg = averageofClass() / students[0].marks.length
    let result = percentageOfStudentsBelowTotal(avg)

    return result
}

const percentOfStudentsScoringAboveAvgInEach = () => {

    let subjectList = fetchSubs()
    let avg = averageofClass() / students[0].marks.length

    for(let key in subjectList)
    subjectList[key] = percentageOfStudentsAbove(key,avg)

    return subjectList
}

const percentOfStudentsScoringBelowAvgInEach = () => {

    let subjectList = fetchSubs()
    let avg = averageofClass() / students[0].marks.length

    for(let key in subjectList)
    subjectList[key] = percentageOfStudentsBelow(key,avg)

    return (subjectList ? subjectList : "no result")
}

export const studentsScoringAboveClassAvgInAll = () =>{

    let avg = averageofClass() / students[0].marks.length
    let result = filterStudentsByMinScore(avg)
    result = result.map(student => student.name)

    return (result.length > 0 ? result : "no result")
}

export const studentsScoringBelowClassAvgInAll = () =>{

    let avg = averageofClass() / students[0].marks.length
    let result = filterStudentsByMaxScore(avg)
    result = result.map(student => student.name)

    return (result.length > 0 ? result : "no result")
}

// students scoring above the average class in most subject already done
// students scoring below the average class in most subject already done

export const subjectsAveragingAboveInMost = () =>{

    let avg = averageofClass() / students[0].marks.length
    let subjectList = fetchSubs()
    let result = []

    for(let key in subjectList)
        subjectList[key] = percentageOfStudentsAbove(key,avg)

    for(let key in subjectList)
        subjectList[key] > 50 && result.push(key)
    
    return (result.length > 0 ? result : "no result")
}

export const subjectsAveragingBelowInMost = () =>{

    let avg = averageofClass() / students[0].marks.length
    let subjectList = fetchSubs()
    let result = []

    for(let key in subjectList)
        subjectList[key] = percentageOfStudentsBelow(key,avg)

    
    for(let key in subjectList)
        subjectList[key] > 50 && result.push(key)
    
    return (result.length > 0 ? result : "no result")
}


export const percentageOfStudentsAveragingAboveStudentInMost = (id) =>{

    let result = []
    let avg = averageMarkOfOne(id)
    let majority_factor = students[0].marks.length / 2

    students.forEach((student) => {

        let res_array = student.marks.filter(detail => detail.mark > avg)
        res_array.length > majority_factor &&  result.push(student.name)
    })
    return (result ? result : "no result")
}

export const percentageOfStudentsAveragingBelowStudentInMost = (id) =>{

    let result = []
    let avg = averageMarkOfOne(id)
    let majority_factor = students[0].marks.length / 2

    students.forEach((student) => {

        let res_array = student.marks.filter(detail => detail.mark < avg)
        res_array.length > majority_factor &&  result.push(student.name)
    })
    return (result ? result : "no result")
}

// 97 & 98 is same question as above and has already been done

export const subjectWithHighestpercentAboveStudentAverage = (id) =>{

    let avg = averageMarkOfOne(id)
    let markList = fetchSubs()
    let result = []
    
    for(let key in markList)
    markList[key] = percentageOfStudentsAbove(key,avg)

    let max_value = Math.max(...Object.values(markList))
    for(let key in markList)
    markList[key] == max_value && result.push(key)

    return result
}

export const subjectWithHighestpercentBelowStudentAverage = (id) =>{

    let avg = averageMarkOfOne(id)
    let markList = fetchSubs()
    let result = []
    
    for(let key in markList)
    markList[key] = percentageOfStudentsBelow(key,avg)

    let max_value = Math.max(...Object.values(markList))
    for(let key in markList)
    markList[key] == max_value && result.push(key)

    return result
}


//////////////////////////////////////////////////////////////////
// function calls



export let easyQuestions =  [
    {"question" : "Write a function to print the name of the class","answer" : printClassName()},
    {"question" : "Write a function to print the teacher's name:" , "answer" : printTeachersName()},
    {"question" : "Write a function to print the names of all the students in the class" , "answer" : printStudentsNames()},
    {"question" : "Write a function to print the IDs of all the students in the class." , "answer" : printStudentIds()},
    {"question" : "Write a function to print the subject names for a specific student" , "answer" : printSubjectsOfOne("103")},
    {"question" : "Write a function to print the marks of a specific student in all subjects." , "answer" : printMarksOfOne("102")},
    {"question" : "Write a function to calculate and print the average marks for a specific student" , "answer" : averageMarkOfOne("101")},
    {"question" : "Write a function to calculate and print the total marks for a specific student." , "answer" : totalMarkOfOne("103")},
    {"question" : "Write a function to calculate and print the average marks for all students in a specific subject." , "answer" : averageMarkOfSubject('Computer')},
    {"question" : "Write a function to calculate and print the total marks for all students in a specific subject" , "answer" : totalMarkOfSubject("Computer")},
    {"question" : "Write a function to find and print the student with the highest marks in a specific subject" , "answer" : topperOfSub("Physics")},
    {"question" : "Write a function to find and print the student with the lowest marks in a specific subject." , "answer" : bottomOfSub("Physics")},
    {"question" : "Write a function to find and print the student with the highest total marks." , "answer" : topper()},
    {"question" : "Write a function to find and print the student with the lowest total marks." , "answer" : low_scorer()},
    {"question" : "Write a function to find and print the subject with the highest average marks." , "answer" : subjectWithHighAvg()},
    {"question" : "Write a function to find and print the subject with the lowest average marks." , "answer" : subjectWithLowAvg()},
    {"question" : "Write a function to calculate and print the overall average marks for the class." , "answer" : averageofClass()},
    {"question" : "Write a function to calculate and print the overall total marks for the class." , "answer" : totalofClass()},
    {"question" : "Write a function to calculate and print the average marks for each subject" , "answer" : averageOfEachSub()}, //
    {"question" : "Write a function to calculate and print the total marks for each subject" , "answer" : totalMarkOfSubs()},
    {"question" : "Write a function to find and print the subject with the highest total marks." , "answer" : topperSubject()},
    {"question" : "Write a function to find and print the subject with the lowest total marks" , "answer" : lowerSubject()},
    {"question" : "Write a function to find and print the student(s) with the highest average marks." , "answer" : toppersByAvg()},
    {"question" : "Write a function to find and print the student(s) with the lowest average marks." , "answer" : lowersByAvg()},
    {"question" : "Write a function to find and print the student(s) with the highest total marks." , "answer" : toppers()},
    {"question" : "Write a function to find and print the student(s) with the lowest total marks." , "answer" : lowers()},
    ]

    export let mediumQuestions = [
    {"question" : "Write a function to calculate and print the number of students who scored above a certain mark in a specific subject." , "answer" : filterStudentsMinLimit(30,"English")},
    {"question" : "Write a function to calculate and print the number of students who scored below a certain mark in a specific subject." , "answer" : filterStudentsMaxLimit(30,"English")},
    {"question" : "Write a function to calculate and print the number of students who scored above a certain mark in all subjects." , "answer" : filterStudentsByLowerLimit(30)},
    {"question" : "Write a function to calculate and print the number of students who scored below a certain mark in all subjects." , "answer" : filterStudentsByUpperLimit(45)},
    {"question" : "Write a function to calculate and print the percentage of students who scored above a certain mark in a specific subject." , "answer" : percentageOfStudentsAbove("English",30)},
    {"question" : "Write a function to calculate and print the percentage of students who scored below a certain mark in a specific subject." , "answer" : percentageOfStudentsBelow("English",30)},
    {"question" : "Write a function to calculate and print the percentage of students who scored above a certain mark in all subjects." , "answer" : percentageOfStudentsAboveTotal(30)},
    {"question" : "Write a function to calculate and print the percentage of students who scored below a certain mark in all subjects." , "answer" : percentageOfStudentsBelowTotal(40)},
    {"question" : "Write a function to find and print the student(s) with the highest percentage of marks." , "answer" : studentsWithHighPercent()},
    {"question" : "Write a function to find and print the student(s) with the lowest percentage of marks." , "answer" : studentsWithLowPercent()},
    {"question" : "Write a function to find and print the subject(s) with the highest percentage of marks." , "answer" : subjectsWithHighestPercent()},
    {"question" : "Write a function to find and print the subject(s) with the lowest percentage of marks." , "answer" : subjectsWithLowestPercent()},
    {"question" : "Write a function to find and print the student(s) with the highest percentage of marks in a specific subject." , "answer" : studentsWithHighestPercentIn("Maths")},
    {"question" : "Write a function to find and print the student(s) with the lowest percentage of marks in a specific subject." , "answer" : studentsWithLowestPercentIn("Maths")},
    {"question" : "Write a function to find and print the student(s) who scored the highest marks in at least one subject." , "answer" : topScorersOfEachSub()},
    {"question" : "Write a function to find and print the student(s) who scored the lowest marks in at least one subject." , "answer" : lowScorersOfEachSub()},
    {"question" : "Write a function to find and print subjects which has highest scores" , "answer" : subjectsWithHighestScores()},
    {"question" : "Write a function to find and print subjects which has lowest score" , "answer" : subjectsWithLowestScores()},
    {"question" : "Write a function to find and print subjects scoring above average" , "answer" : studentsScoringAboveAverage()},
    {"question" : "Write a function to find and print students scoring below average" , "answer" : studentsScoringBelowAverage()},
    ]
// 41 yet to find
    export let hardQuestions = [
    {"question" : "Write a function to find and print subjects scoring above average" , "answer" : subjectsAboveAverage()},
    {"question" : "Write a function to find and print subjects scoring below average" , "answer" : subjectsBelowAverage()},
    {"question" : "Write a function to find and print the subject(s) in which all students scored above a certain mark." , "answer" : subWithStudentsAbove(20)},
    {"question" : "Write a function to find and print the subject(s) in which all students scored below a certain mark." , "answer" : subWithStudentsBelow(30)},
    {"question" : "Write a function to calculate and print the percentage of students who scored above the class average marks in at least one subject." , "answer" : leastSubWithStudentsAbove(30)},
    {"question" : "Write a function to calculate and print the percentage of students who scored below the class average marks in at least one subject." , "answer" : leastSubWithStudentsBelow(30)},
    {"question" : "Write a function to find and print the student(s) who scored above the class average marks in all subjects." , "answer" : percentOfStudentsAboveAverage()},
    {"question" : "Write a function to find and print the student(s) who scored below the class average marks in all subjects." , "answer" : percentOfStudentsBelowAverage()},
    {"question" : "Write a function to find and print the student(s) who scored above the class average marks in the majority of subjects." , "answer" : studentsAveragingAboveInMost()},
    {"question" : "Write a function to find and print the student(s) who scored below the class average marks in the majority of subjects." , "answer" : studentsAveragingBelowInMost()},
    {"question" : "Write a function to find and print the subject(s) in which the majority of students scored above the class average marks." , "answer" : subjectsAveragingAboveClass()},
    {"question" : "Write a function to find and print the subject(s) in which the majority of students scored below the class average marks." , "answer" : subjectsAveragingBelowClass()},
    {"question" : "Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in at least one subject." , "answer" : studentsAboveStudentInEach("104")},
    {"question" : "Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in at least one subject" , "answer" : studentssBelowStudentInEach("102")},
    {"question" : "Write a function to find and print the student(s) who scored above the average marks of a specific student in all subjects." , "answer" : studentsAboveStudentInAll("102")},
    {"question" : "Write a function to find and print the student(s) who scored below the average marks of a specific student in all subjects." , "answer" : studentsBelowStudentInAll("104")},
    {"question" : "Write a function to find and print the student(s) who scored above the average marks of a specific student in all subjects." , "answer" : studentsAveragingAbove("101")},
    {"question" : "Write a function to find and print the student(s) who scored below the average marks of a specific student in all subjects." , "answer" : studentsAveragingBelow("101")},
    {"question" : "Write a function to find and print the subject(s) in which the average marks are above the average marks of a specific student" , "answer" : subjectsAveragingAboveStudent("101")},
    {"question" : "Write a function to find and print the subject(s) in which the average marks are below the average marks of a specific student." , "answer" : subjectsAveragingBelowStudent("103")},

]

export let toughQuestions = [
    {"question" : "Write a function to find and print the subject(s) with the highest percentage of marks for a specific student" , "answer" : highestPercentageOf("102")},
    {"question" : "Write a function to find and print the subject(s) with the lowest percentage of marks for a specific student." , "answer" : lowestPercentageOf("102")},
    {"question" : "Write a function to find and print the subject(s) in which all students scored above a certain mark." , "answer" : subjectsScoredAbove(18)},
    {"question" : "Write a function to find and print the subject(s) in which all students scored below a certain mark." , "answer" : subjectsScoredBelow(50)},
    {"question" : "Write a function to find and print the subject(s) in which the average marks of all students are above a certain mark." , "answer" : averageMarksOfSubsAbove(35)},
    {"question" : "Write a function to find and print the subject(s) in which the average marks of all students are below a certain mark." , "answer" : averageMarksOfSubsBelow(35)},
    {"question" : "Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student." , "answer" : subjectsMaxPercentStudentsAboveStudent("102")},
    {"question" : "Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student." , "answer" : subjectsMaxPercentStudentsBelowStudent("102")},
    {"question" : "Write a function to find and print the subject(s) in which the lowest percentage of students scored above the average marks of a specific student." , "answer" : subjectsMinPercentStudentsAboveStudent("102")},
    {"question" : "Write a function to find and print the subject(s) in which the lowest percentage of students scored below the average marks of a specific student." , "answer" : subjectsMinPercentStudentsBelowStudent("103")},
    {"question" : "Write a function to calculate and print the percentage of students who scored above the average marks of the class in each subject." , "answer" : percentOfStudentsScoringAboveAvgInTotal()},
    {"question" : "Write a function to calculate and print the percentage of students who scored below the average marks of the class in each subject." , "answer" : percentOfStudentsScoringBelowAvgInTotal()},
    {"question" : "Write a function to calculate and print the percentage of students who scored above the average marks of the class in at least one subject" , "answer" : percentOfStudentsScoringAboveAvgInEach()},
    {"question" : "Write a function to calculate and print the percentage of students who scored below the average marks of the class in at least one subject. ", "answer" : percentOfStudentsScoringBelowAvgInEach()},
    {"question" : "Write a function to find and print the student(s) who scored above the average marks of the class in all subjects." , "answer" : studentsScoringAboveClassAvgInAll()},
    {"question" : "Write a function to find and print the student(s) who scored below the average marks of the class in all subjects." , "answer" : studentsScoringBelowClassAvgInAll()},
    {"question" : "Write a function to find and print the subject(s) in which the majority of students scored above the average marks of the class" , "answer" : subjectsAveragingAboveInMost()},
    {"question" : "Write a function to find and print the subject(s) in which the majority of students scored below the average marks of the class." , "answer" : subjectsAveragingBelowInMost()},
    {"question" : "Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects" , "answer" : percentageOfStudentsAveragingAboveStudentInMost("101")},
    {"question" : "Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in the majority of subjects" , "answer" : percentageOfStudentsAveragingBelowStudentInMost("102")},
    {"question" : "Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student." , "answer" : subjectWithHighestpercentAboveStudentAverage("102")},
    {"question" : "Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student." , "answer" : subjectWithHighestpercentBelowStudentAverage("104")},
]