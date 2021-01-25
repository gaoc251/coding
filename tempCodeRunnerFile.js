     if(str1[i] == str2[j] && str1[i-1] == str2[j-1]) {
                    arr[i][j]=arr[i-1][j-1]+1
                } else {
                    arr[i][j] = 0;
                }

                if (arr[i][j] > maxLen) {
                    maxLen = arr[i][j];
                    index = i
                }