document.getElementById('entry').value=null;
let input;
let array = new Array('Ashish Shah',
    'Rashmin Chhatrala',
    'Yash Dubey',
    'Prakash Jain',
    'Yashraj Singh',
    'Viraj Sinha',
    'Rajesh Kumar',
    'Mahesh Marwadi',
    'Suresh Sahni',
    'Amar Vilas',
    'Virdas Singhania',
    'Rajeshwari Bindra',
    'Birendra Bhalerao',
    'Virendra Bhupati',
    'Bhupendra Singh',
    'Bhuvam Bam',
    'Shri Raj',
    'Prashant Kamle',
    'Kamlesh Tomar',
    'Risabh Khare',
    'Rishi Kohli',
    'Kunwar Kharwanda',
    'Kartik Koli',
    'Komal Jain',
    'Kartikey Pandey');
function filter()
{
    document.getElementById('list').innerHTML="";
    input = document.getElementById('entry').value.toLowerCase();
    array.forEach(function (item) {
        let ind=item.toLowerCase().indexOf(input);
        if(input.length>=2)
            if(ind>=0)
            {
                document.getElementById('list').innerHTML+=`${item.slice(0,ind)}`;
                document.getElementById('list').innerHTML+=`<span id="highlight">${item.slice(ind, ind+input.length)}</span>`;
                document.getElementById('list').innerHTML+=`${item.slice(ind+input.length,item.length)}<br>`;
            }
    });
}