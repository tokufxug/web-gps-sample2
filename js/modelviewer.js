'use strict';

class ModelViewer {
    static loadFinished(){
       const ar_view = "ar-view";
       const not_access = "not-access";
       let display_id = "";
       if (Common.isAccess2AR())
       {
           display_id = ar_view;
           Common.loadAnalytics();
       }
       else
       {
           display_id = not_access;
       }
       document.getElementById(display_id).style.display = 'block';
    }
}
window.onload = ModelViewer.loadFinished;
