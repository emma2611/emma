import React from 'react'

const page = () => {
  return(
    <div><figure className="md:flex bg-blue-500 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:rounded-none rounded-full mx-auto" src="/aima pic.jpeg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “I have graduated from Kfueit. Recently I joined AI course. There is so much in AI
          course which is very interesting and I enjoyed it a lot."
        
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-30 dark:text-sky-400">
          Aima Iftikhar
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Freelancer
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page