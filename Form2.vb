Public Class Form2

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        If ComboBox1.Text = "Very Easy" Then
            Dim FILE_NAME As String = "C:\snake_py\VE.py"

            If System.IO.File.Exists(FILE_NAME) = True Then
                Process.Start(FILE_NAME)
            Else
                MsgBox("File Does Not Exist")
            End If
        ElseIf ComboBox1.Text = "Easy" Then
            Dim FILE_NAME As String = "C:\snake_py\E.py"

            If System.IO.File.Exists(FILE_NAME) = True Then
                Process.Start(FILE_NAME)
            Else
                MsgBox("File Does Not Exist")
            End If
        ElseIf ComboBox1.Text = "Normal" Then
            Dim FILE_NAME As String = "C:\snake_py\N.py"

            If System.IO.File.Exists(FILE_NAME) = True Then
                Process.Start(FILE_NAME)
            Else
                MsgBox("File Does Not Exist")
            End If
        ElseIf ComboBox1.Text = "Hard" Then
            Dim FILE_NAME As String = "C:\snake_py\H.py"

            If System.IO.File.Exists(FILE_NAME) = True Then
                Process.Start(FILE_NAME)
            Else
                MsgBox("File Does Not Exist")
            End If
        ElseIf ComboBox1.Text = "Very Hard" Then
            Dim FILE_NAME As String = "C:\snake_py\VH.py"

            If System.IO.File.Exists(FILE_NAME) = True Then
                Process.Start(FILE_NAME)
            Else
                MsgBox("File Does Not Exist")
            End If
        ElseIf ComboBox1.Text = "None" Then
            MsgBox("Please Select any one Option")
        End If
    End Sub
End Class