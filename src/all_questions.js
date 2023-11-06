



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
    classObj.students.forEach((student)=>{
        return(student.name)
    })
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
    let result = []
    student.marks.forEach(subjectDetails => result.push(subjectDetails.subject,subjectDetails.mark))
    return (result.length > 0 ? result :'student not found' )
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
    return aggregate
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

    return(totalMarks)
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
            found && result.push({key:student.name})
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
            found && result.push({key:student.name})
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

    return result
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

    return result
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
    return result
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
    return result
}

export const averageMarksOfSubsAbove = (mark_lim) =>{
    
    let totalMark = totalMarkOfSubs()
    let result = []

    for(let key in totalMark)
        totalMark[key] = totalMark[key] / students.length
    
    for(let key in totalMark)
        totalMark[key] > mark_lim && result.push(key) 

    return result
}

export const averageMarksOfSubsBelow = (mark_lim) =>{
    
    let totalMark = totalMarkOfSubs()
    let result = []

    for(let key in totalMark)
        totalMark[key] = totalMark[key] / students.length
    
    for(let key in totalMark)
        totalMark[key] < mark_lim && result.push(key) 

        return result
}

export const subjectsWithHighestScores = () =>{

    const markList = topScoresOfEachSub()
    let maxValue = Math.max(...Object.values(markList))
    let result = []
    
    for(let key in markList)
    maxValue == markList[key] && result.push(key)

    return result
}

export const subjectsWithLowestScores = () =>{

    const markList = lowScoresOfEachSub()
    let minValue = Math.min(...Object.values(markList))
    let result = []
    
    for(let key in markList)
    minValue == markList[key] && result.push(key)

    return result
}

export const studentsScoringAboveAverage = () =>{
    const classAverage = averageofClass()
    let result = []

    students.forEach(student => {
        studentTotal = student.marks.reduce((total,value) => total += value.mark , 0)
        studentTotal > classAverage && result.push(student.name)
    })

    return result
}

export const studentsScoringBelowAverage = () =>{
    const classAverage = averageofClass()
    let result = []

    students.forEach(student => {
        studentTotal = student.marks.reduce((total,value) => total += value.mark , 0)
        studentTotal < classAverage && result.push(student.name)
    })

    return result
}

export const subjectsAboveAverage = () =>{

    let markList = averageOfEachSub()
    const average = averageofClass()
    let result = []

    for(let key in markList)
    markList[key] > average && result.push(key)

    return result
}

export const subjectsBelowAverage = () =>{

    let markList = averageOfEachSub()
    const average = averageofClass()
    let result = []

    for(let key in markList)
    markList[key] < average && result.push(key)

    return result
}

export const subWithStudentsAbove = (mark_limit) =>{
    
    let setPercentage = fetchSubs()
    let result = []

    for(let key in setPercentage)
    setPercentage[key] = percentageOfStudentsAbove(key,mark_limit)

    let max_value = Math.max(...Object.values(setPercentage))
    for( key in setPercentage)
    setPercentage[key] == max_value && result.push("\nhighest percentage of students in ",key)

    return result
}

export const subWithStudentsBelow = (mark_limit) =>{
    
    let setPercentage = fetchSubs()
    let result = []

    for(let key in setPercentage)
    setPercentage[key] = percentageOfStudentsBelow(key,mark_limit)

    let max_value = Math.max(...Object.values(setPercentage))
    for( key in setPercentage)
    setPercentage[key] == max_value && result.push("\nhighest percentage of students in ",key)

    return result
}

export const leastSubWithStudentsAbove = (mark_limit) =>{
    
    let setPercentage = fetchSubs()
    let result = []

    for(let key in setPercentage)
    setPercentage[key] = percentageOfStudentsAbove(key,mark_limit)

    min_value = Math.min(...Object.values(setPercentage))
    for(let key in setPercentage)
    setPercentage[key] == min_value && result.push("\nlowest percentage of students in ",key)

    return result
}

export const leastSubWithStudentsBelow = (mark_limit) =>{
    
    let setPercentage = fetchSubs()
    let result = []

    for(let key in setPercentage)
    setPercentage[key] = percentageOfStudentsBelow(key,mark_limit)

    min_value = Math.min(...Object.values(setPercentage))
    for(let key in setPercentage)
    setPercentage[key] == min_value && result.push("\nlowest percentage of students in ",key)

    return result
}


export const percentOfStudentsAboveAverage = () => {
    
    const classAverage = averageofClass()
    let setCount = fetchSubs()
    let percent = 0;

    for(let key in setCount){
        temp_value = percentageOfStudentsAbove(key,classAverage) 
        temp_value > percent ? percent = temp_value : ''
    }

    return("\n percent of students scoring above average in atleats 1 ",percent)
}

export const percentOfStudentsBelowAverage = () => {
    
    const classAverage = averageofClass()
    let setCount = fetchSubs()
    let percent = 0;

    for(let key in setCount){
        temp_value = percentageOfStudentsBelow(key,classAverage) 
        temp_value > percent ? percent = temp_value : ''
    }

    return (percent)
}

export const studentsAveragingAboveInMost = () =>{

    let majority_factor = students[0].marks.length / 2
    let averageMark = averageofClass()

    students.forEach((student) => {
        
        res_array = student.marks.filter((detail) => detail.mark >= averageMark)
        res_array.length >= majority_factor && result.push(student.name)
    })
}

export const studentsAveragingBelowInMost = () =>{

    let majority_factor = students[0].marks.length / 2
    let averageMark = averageofClass()
    let result = []

    students.forEach((student) => {
        
        res_array = student.marks.filter((detail) => detail.mark <= averageMark)
        res_array.length >= majority_factor && result.push(student.name)
    })
}


//////////////////////////////////////////////////////////////////
// function calls



export let easyQuestions =  [
    {"question" : "print class name" , "answer" : printClassName()},
    {"question" : "question2" , "answer" : printTeachersName()},
    {"question" : "question2" , "answer" : printStudentIds("Mary")},
    {"question" : "question2" , "answer" : printSubjectsOfOne("103")},
    {"question" : "question2" , "answer" : printMarksOfOne("102")},
    {"question" : "question2" , "answer" : averageMarkOfOne("101")},
    {"question" : "question2" , "answer" : totalMarkOfOne("103")},
    {"question" : "question2" , "answer" : averageMarkOfSubject('Computer')},
    {"question" : "question2" , "answer" : totalMarkOfSubject("Computer")},
    {"question" : "question2" , "answer" : topperOfSub("Physics")},
    {"question" : "question2" , "answer" : bottomOfSub("Physics")},
    {"question" : "question2" , "answer" : topper()},
    {"question" : "question2" , "answer" : low_scorer()},
    {"question" : "question2" , "answer" : subjectWithHighAvg()},
    {"question" : "question2" , "answer" : subjectWithLowAvg()},
    {"question" : "question2" , "answer" : averageofClass()},
    {"question" : "question2" , "answer" : totalofClass()},
    {"question" : "question2" , "answer" : averageOfEachSub},
    {"question" : "question2" , "answer" : totalMarkOfSubs()},
    {"question" : "question2" , "answer" : topperSubject()},
    {"question" : "question2" , "answer" : lowerSubject()},
    {"question" : "question2" , "answer" : toppersByAvg()},
    {"question" : "question2" , "answer" : lowersByAvg()},
    {"question" : "question2" , "answer" : toppers()},
    {"question" : "question2" , "answer" : lowers()},
    ]

    export let mediumQuestions = [
    {"question" : "print class name" , "answer" : filterStudentsMinLimit(30,"English")},
    {"question" : "question2" , "answer" : filterStudentsMaxLimit(30,"English")},
    {"question" : "question2" , "answer" : filterStudentsByLowerLimit(30)},
    {"question" : "question2" , "answer" : filterStudentsByUpperLimit(45)},
    {"question" : "question2" , "answer" : percentageOfStudentsAbove("English",30)},
    {"question" : "question2" , "answer" : percentageOfStudentsBelow("English",30)},
    {"question" : "question2" , "answer" : percentageOfStudentsAboveTotal(30)},
    {"question" : "question2" , "answer" : percentageOfStudentsBelowTotal(40)},
    {"question" : "question2" , "answer" : studentsWithHighPercent()},
    {"question" : "question2" , "answer" : studentsWithLowPercent()},
    {"question" : "question2" , "answer" : subjectsWithHighestPercent()},
    {"question" : "question2" , "answer" : subjectsWithLowestPercent()},
    {"question" : "question2" , "answer" : studentsWithHighestPercentIn("Maths")},
    {"question" : "question2" , "answer" : studentsWithLowestPercentIn("Maths")},   //
    {"question" : "question2" , "answer" : topScoresOfEachSub()},
    {"question" : "question2" , "answer" : lowScoresOfEachSub},
    {"question" : "question2" , "answer" : topScorersOfEachSub()},
    {"question" : "question2" , "answer" : lowScorersOfEachSub()},
    {"question" : "question2" , "answer" : totalMarkOfSubs()},
    {"question" : "question2" , "answer" : toppersOfSubs()},
    {"question" : "question2" , "answer" : lowersOfSubs()},
    {"question" : "question2" , "answer" : toppersByAvg()},
    {"question" : "question2" , "answer" : lowersByAvg()},
    {"question" : "question2" , "answer" : toppers()},
    {"question" : "question2" , "answer" : lowers()},
    ]

    export let hardQuestions = [
    {"question" : "print class name" , "answer" : printClassName()},
]

export let toughQuestions = [
    {"question" : "print class name" , "answer" : highestPercentageOf("102")},
    {"question" : "print class name" , "answer" : lowestPercentageOf("102")},
    {"question" : "print class name" , "answer" : subjectsScoredAbove(18)},
    {"question" : "print class name" , "answer" : subjectsScoredBelow(50)},
    {"question" : "print class name" , "answer" : averageMarksOfSubsAbove(35)},
    {"question" : "print class name" , "answer" : averageMarksOfSubsBelow(35)},
]