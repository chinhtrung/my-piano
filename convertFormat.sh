#!/bin/bash 
date 
whoami 
pwd

# https://likegeeks.com/awk-command/
# https://sound.stackexchange.com/questions/22769/are-there-free-records-of-separate-piano-notes-in-wav-files-for-instance

# awk -F. '{
#     system("ls")
# }' allFile.txt
# awk -F. '{
#     link = $0 "haha"
#     system("echo " link "| cat > haha.txt")
# }' allFile.txt

awk -F. '{
    from = "./pianoSounds/uiowa/aiff_format/" $0
    to = "./pianoSounds/uiowa/m4a_format/" $3 ".m4a"
    system("ffmpeg -i " from " -af loudnorm,silenceremove=start_periods=1:start_silence=0.05:start_threshold=-40dB,afade=out:st=3:d=1.5,afade=in:st=0:d=0.05 -to 4.5 " to)
}' allFile.txt
