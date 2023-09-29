const fs = require('fs');
function frequent_pairs(data_file_name , stopword_file_name ,k)
{
    const Data_File_Descriptor = fs.readFileSync(data_file_name , 'utf-8');
    const Stop_File_Descriptor = fs.readFileSync(stopword_file_name,'utf-8');

    const lines = Data_File_Descriptor.split(/[?.!]/);

    const Word_Couples = [];
    const Word_Count = {};
    for(let line of lines)
    {
        let tmp = line.trim().toLowerCase().split(/[^a-zA-Z0-9_\-/"()]+/)
        for(let i = 0 ;i<tmp.length;i++)
        {
            for(let j =i+1;j<tmp.length;j++)
            {
                let w1 = tmp[i];
                let w2 = tmp[j];
                if(w1.length>=5 && w2.length>=5 && w1 !== w2)
                {
                    let sort_Couple = [w1,w2].sort().join(", ");
                    if(!Stop_File_Descriptor.includes(w1) && !Stop_File_Descriptor.includes(w2)) {
                        if (isNaN(Word_Count[sort_Couple])) Word_Count[sort_Couple] = 0;
                        Word_Count[sort_Couple]++;
                    }
                }
            }

        }
    }




    const Sort_Word = Object.entries(Word_Count).sort((x,y) => y[1] - x[1]);

    console.log('[')
    for(let i =0 ; i<k ;i++)
    {
        console.log(`    ['(${Sort_Word[i][0]})'] : ${Sort_Word[i][1]}회 ,`);
    }
    console.log(']')

}

frequent_pairs('novel.txt' , 'stop.txt',5)










