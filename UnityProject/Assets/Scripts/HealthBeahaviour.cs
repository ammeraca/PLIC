using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class HealthBeahaviour : MonoBehaviour
{
    public float curHealth = 0f;
    public float maxHealth = 1f;
    public float reviveSpeed = 5f;
    private bool reviving = false;
    private bool revived = false;

    public Image healthImage;

    public BossBehaviour bossBehaviour;

    // Start is called before the first frame update
    void Start()
    {
        healthImage.fillAmount = curHealth;
    }

    // Update is called once per frame
    void Update()
    {
        if (curHealth >= maxHealth)
        {
            revived = true;
            bossBehaviour.Revive();
            gameObject.SetActive(false);
        }
        if (reviving)
        {
            curHealth += reviveSpeed * Time.deltaTime;
            healthImage.fillAmount = curHealth;
        }
        else if (curHealth > 0f)
        {
            curHealth -= reviveSpeed * Time.deltaTime;
            healthImage.fillAmount = curHealth;
        }
    }

    public void OnClick()
    {
        reviving = !reviving;
    }
}
