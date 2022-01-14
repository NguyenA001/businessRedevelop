/* <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-2 d-none d-md-block"></div>
                <div class="col-1 d-sm-block d-md-block d-md-none"></div>
                <div class="col-8">
                  <p  class="item">
                    <b> A14) Fried Calamari  </b><br />
                    Deep fried squid served with sweet n' sour sauce.
                  </p>
                </div>
                <div class="col-1">
                  <p><b> $9.95 </b></p>
                </div>
              </div>
            </div>
          </div> */

function MakeMenuItem(title, description, cost){

    let outerRow = MakeDiv();
    let col12 = MakeDiv();
    let innerRow = MakeDiv();
    //----put some comments here
    let col2 = MakeDiv();
    col2.className ="col-2 d-none d-md-block";
    // --- put some comments here
    let col1 = MakeDiv();
    col1.className = "col-1 d-sm-block d-md-block d-md-none";
    let col8 = MakeDiv();
    let item = document.createElement('p');
    item.className = 'item';
    let boldTitle = document.createElement('b');
    boldTitle.textContent = title;




}

function MakeDiv(){
    return document.createElement('div');
}


let menuItems = [
    {
        title:'A1',
        description:"Deep fried squid served with sweet n' sour sauce.",
        cost:'9.95',
        category:'appetizer'
    },
    {

    }
];

export default MakeMenuItem