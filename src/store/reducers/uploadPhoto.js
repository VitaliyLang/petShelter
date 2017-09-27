let initialState = {
    photoUrl: null,
    error: null,
    isUpload: false
};

export default (state = initialState, action) =>{    
      switch (action.type) {
        case 'PHOTO_UPLOADING_OK':
            return { ...state, isUpload:true, photoUrl:action.photoUrl };
        case 'PHOTO_UPLOADING_FAIL':
            return { ...state, isUpload: false, error:action.error };
        default:
          return state;
      }
}