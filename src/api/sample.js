import { BASE_URL, METHOD, _promise } from "./config"

/* API 정리
  - getPosttypes : 게시판 리스트를 가져오는 API  (페이지 구분)
  - postPosttype : 새로운 게시판  추가하는 API
  - putPosttype : 게시판 정보를 수정하는 API
  - deletePosttype :  게시판 삭제하는 API
*/

export default {
  sample(page) {
    return _promise(METHOD.GET, `${BASE_URL}/sample?page=${page}`)
  }
}
