using Doublsb.Dialog;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class BossBehaviour : MonoBehaviour
{
    public Animator animator;
    public Transform playerPos;
    public float speed = 5f;
    public float distanceToPlayer = 5f;

    private int indexDialog = 0;
    public List<string> dialogs;
    public DialogManager dialogManager;

    public HealthBeahaviour healthBeahaviour;
    
    private bool talking = false;
    private bool running = false;
    private bool hit = false;
    private bool revived = false;

    // Start is called before the first frame update
    void Start()
    {
        animator.SetBool("talking", false);
        animator.SetBool("running", false);
        animator.SetBool("hit", false);
        animator.SetBool("revive", false);
        var dialogData = new List<DialogData>();
    }

    // Update is called once per frame
    void Update()
    {
        if (talking || running)
        {
            Vector3 targetDir = playerPos.position - transform.position;
            float angle = Vector2.Angle(targetDir, transform.forward);
            transform.LookAt(new Vector3(playerPos.position.x, transform.position.y, playerPos.position.z));
            
        }
        if (running)
        {
            transform.RotateAround(playerPos.position, Vector3.up, -  360f * speed * Time.deltaTime);
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if (!running && !hit && !revived)
        {
            talking = true;
            dialogManager.gameObject.SetActive(true);
            var dialogData = new List<DialogData>();
            for (int i = indexDialog; i < dialogs.Count; i++)
            {
                dialogData.Add(new DialogData(dialogs[i], "The Boss", () => ++indexDialog));
            }
            dialogData[dialogData.Count - 1].Callback = () => EndDialog();
            dialogManager.Show(dialogData);
            animator.SetBool("talking", true);
        } else if (hit)
        {
            healthBeahaviour.gameObject.SetActive(true);
        }
    }

    private void OnTriggerExit(Collider other)
    {
        talking = false;
        dialogManager.gameObject.SetActive(false);
        animator.SetBool("talking", false);
    }

    private void OnCollisionEnter(Collision collision)
    {
        hit = true;
        running = false;
        animator.SetBool("hit", true);
        healthBeahaviour.gameObject.SetActive(true);
    }

    private void EndDialog()
    {
        dialogManager.gameObject.SetActive(false);
        running = true;
        animator.SetBool("running", true);
        talking = false;
    }

    public void Revive()
    {
        animator.SetBool("revive", true);
        revived = true;
    }
}
