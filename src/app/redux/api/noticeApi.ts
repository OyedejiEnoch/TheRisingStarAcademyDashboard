import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



type Notice={
    title:string,
    body:string,
    author:string,
    createdAt:string
}

type AllNotice={
    notice:Notice[]
}


export const noticeApi =createApi({
    reducerPath:"noticeApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://therisingstaracademy.onrender.com/api',credentials: 'include' }),
    endpoints: (builder)=>({

        newNotice: builder.mutation<Notice, Notice>({
            query:(body)=>({
                url:"/notice/all",
                method:"POST",
                body
            })
        }),
        allNotice: builder.query<AllNotice, void>({
            query:()=>`/notice/all`
        }),
        latestNotice: builder.query<AllNotice, void>({
            query:()=>`/notice/latest`
        }),
        singleNotice: builder.query<Notice, string>({
            query:(id)=>`/notice/${id}`
        }),
        deleteNotice: builder.query<void, string>({
            query:(id)=>`/notice/delete/${id}`
        }),
    })
})

export const {useAllNoticeQuery, useLatestNoticeQuery, useDeleteNoticeQuery, useSingleNoticeQuery, useNewNoticeMutation} = noticeApi