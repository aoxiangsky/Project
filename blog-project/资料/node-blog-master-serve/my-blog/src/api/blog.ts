import request from '@/utils/request'
interface author {
  isadmin: string
}
interface articleId {
  id: string | (string | null)[]
}

export const getArticles = (params?: author) =>
  request({
    url: 'api/blog/list',
    method: 'get',
    params
  })

export const detailArticle = (params: articleId) => 
  request({
    url:'api/blog/detail',
    method: 'get',
    params
  })

export const createArticle = (data: any) => 
  request({
    url:'api/blog/new',
    method: 'post',
    data
  })
export const delArticle = (data: {id: number}) => {
  request({
    url: 'api/blog/del',
    method: 'post',
    data
  })
}


